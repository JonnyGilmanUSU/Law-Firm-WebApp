import { useState, useEffect, useCallback } from 'react';
import { ContactContext } from "./contexts";
import axios from 'axios';
import useHttp from '../hooks/use-http';

const ContactContextProvider = (props) => {

    //State variable for storing contact requests
    const [contactRequests, setContactRequests] = useState([]);

    // Call the hook for data retrieval
    const { isLoading, error, sendRequest, } = useHttp();

    //Data retrieval functions

    //Get contact Requests
    const getContactRequests = useCallback(async () => {
        sendRequest({ url: "http://localhost:5000/contactRequests" }, setContactRequests);
    }, [sendRequest])

    //Post a new contact request
    const postContactRequest = async (fName, lName, email, message) => {

        sendRequest({
            url: "http://localhost:5000/contactRequests",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: {
                firstName: fName,
                lastName: lName,
                email: email,
                message: message
            }
        })
        // try {
        //     const result = await axios.post("http://localhost:5000/contactRequests", {
        //         firstName: fName,
        //         lastName: lName,
        //         email: email,
        //         message: message
        //     });
        //     console.log("result of post is: ", result.data);
        // } catch (error) {
        //     console.log(error);
        // }
    }

    // Delete a contact request
    const deleteContactRequest = async (id) => {

        //Define an applyData function
        // const updateStateAfterDelete = () => {
        //     setContactRequests((oldRequests) => { return oldRequests.filter((request) => { return request.id !== parseInt(id) }) });
        // }
        
        await sendRequest({url: `http://localhost:5000/contactRequests/${id}`, method: "DELETE"});
        setContactRequests((oldRequests) => { return oldRequests.filter((request) => { return request.id !== parseInt(id) }) });

        // try {
        //     const result = await axios.delete(`http://localhost:5000/contactRequests/${id}`);
        //     console.log("result of delete is: ", result.data);
        //     // Update state
        //     setContactRequests((oldRequests) => { return oldRequests.filter((request) => { return request.id !== parseInt(id) }) });
        //     //getContactRequests();
        // } catch (error) {
        //     console.log(error);
        // }
    }

    //Fetch data first time component loads
    useEffect(() => {
        getContactRequests();
    }, [getContactRequests]);


    return (
        <ContactContext.Provider value={{
            contactRequests,
            postContactRequest,
            deleteContactRequest,
            isLoading,
            error
        }}>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactContextProvider;