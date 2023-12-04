import react, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Main from '../UI/Main/Main';
import './Practices.css';
import useHttp from '../../hooks/use-http';
import { useParams } from 'react-router-dom';

const PracticeDetail = () => {

    const {practiceId} = useParams();

    //State variable for storing practices
    const [practice, setPractice] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState("");

    const {isLoading, error, sendRequest: getPractice} = useHttp();


    // Temporary slow-down function for testing loading state
    // const delay = (ms) => {
    //     return new Promise((resolve) => setTimeout(resolve, ms))
    // }

    //Data retrieval function for getting practices

    // const getPractice = useCallback(async (id) => {
    //     try {
    //         setIsLoading(true);
    //         await delay(2000);

    //         console.log("Sending request to: ", `http://localhost:5000/practices/${id}`)
    //         const result = await axios.get(`http://localhost:5000/practices/${id}`);
    //         console.log("Result is: ", result);

    //         // Add additional steps to transform data before setting state variable
    //         setPractice(result.data);

    //     } catch (error) {
    //         setError(error.message);
    //         console.log(error);
    //         // Add additional error handling here.
    //     }
    //     setIsLoading(false);
    // }, []);


    //Load practices when component first loads
    useEffect(() => {
        getPractice({url: `http://localhost:5000/practices/${practiceId}`}, setPractice);
    }, [getPractice]);


    let content = "";

    if (practice) {

        const imagePath = new URL(`../../assets/images/${practice.image}`, import.meta.url).href;
        content =
        <>
        <h1>{practice.title}</h1>
        <div class="frame3">
            <div class="box">
                <img src={imagePath} alt="Img" height="199" width="584" />
            </div>
        </div>
        <p>
            {practice.description}
        </p>
        </>
    } else if (isLoading) {
        content = <p>Loading...</p>
    } else if (error) {
        content = <p>Oops, something went wrong: {error}</p>
    }

    return (
        <Main>
            {content}
        </Main>
    );
};

export default PracticeDetail;
