// Utility file for sending auth requests
import axios from 'axios';
import db from './db';
import { redirect } from 'react-router-dom';



//Function for sending signup/login requests to Firebase auth service
const sendAuthRequest = async (email, password, endpoint) => {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=AIzaSyCp8zGzYAS2X7Bf8i6H2_EQJvmrxmRXhhE`;

    //Send a request to the auth endpoint
    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    //Return the response
    return response;
};

// Signup action function
export const signUpAction = async ({ request }) => {

    //Grab user's previous URL
    // console.log("Previous URL is: ", request.url)
    const searchParams = new URL(request.url).searchParams;
    const redirectTo = searchParams.get("redirect");
    // console.log("redirect to is: ", redirectTo);

    // Retrieve the data submitted in the form
    const data = await request.formData();

    const firstname = data.get("firstname");
    const lastname = data.get("lastname");
    const email = data.get("email");
    const password = data.get("password");

    // Send a signUp auth request to the Firebase API.
    // Receive user auth data (token, user id, etc.)
    try {
        const response = await sendAuthRequest(email, password, "signUp");
        console.log("Auth response is: ", response);

        // proceed if response successful
        if (response.status === 200) {
            // Extract the needed data from the response
            const { expiresIn, idToken: token, localId: userId } = response.data;

            // Set an expiration date for the token
            const expires = new Date();
            expires.setSeconds(expires.getSeconds() + +expiresIn);

            // Create a custom userData object to store in localStorage
            const userData = {
                firstname,
                lastname,
                email,
                token,
                userId,
                expires
            };

            // Store user data (including token) in localStorage for access
            // by other components

            localStorage.setItem("userData", JSON.stringify(userData));

            // Write a user record to the database
            const insertResponse = await db.put(`/users/${userId}.json`, {
                firstname,
                lastname,
                email,
                userId
            });

            console.log("Insert response is: ", insertResponse);

            // Redirect the user to another page
            return redirect(redirectTo || "/");
        }


    } catch (error) {
        console.log("Error is:", error);
        redirect("/auth?mode=signup");
        return error;

    }






};

// Login action function
export const loginAction = async ({ request }) => {

    //Grab user's previous URL
    // console.log("Previous URL is: ", request.url)
    const searchParams = new URL(request.url).searchParams;
    const redirectTo = searchParams.get("redirect");
    // console.log("redirect to is: ", redirectTo);

    // Retrieve the data submitted in the form
    const data = await request.formData();

    const email = data.get("email");
    const password = data.get("password");

    // Send a signInWithPassword auth request to the Firebase API.
    // Receive user auth data (token, user id, etc.)
    try {
        const response = await sendAuthRequest(email, password, "signInWithPassword");
        console.log("Auth response is: ", response);

        // proceed if response successful
        if (response.status === 200) {
            // Extract the needed data from the response
            const { expiresIn, idToken: token, localId: userId } = response.data;

            // Set an expiration date for the token
            const expires = new Date();
            expires.setSeconds(expires.getSeconds() + +expiresIn);

            // Get the user record from the database
            const fetchResponse = await db.get(`/users/${userId}.json`);

            console.log("fetch response is: ", fetchResponse);

            const { firstname, lastname, email } = fetchResponse.data;

            // Create a custom userData object to store in localStorage
            const userData = {
                firstname,
                lastname,
                email,
                token,
                userId,
                expires
            };

            // Store user data (including token) in localStorage for access
            // by other components

            localStorage.setItem("userData", JSON.stringify(userData));



            // Redirect the user to another page
            return redirect(redirectTo || "/");
        }


    } catch (error) {
        console.log("Error is:", error);
        redirect("/auth?mode=signup");
        return error;

    }
};

// Logout loader function
export const logoutLoader = () => {
    localStorage.removeItem("userData");
    redirect("/");
};

// Auth status loader function
export const authStatusLoader = () => {

};
