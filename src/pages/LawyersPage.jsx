import React from 'react'
import LawyersSidebar from '../components/Lawyers/LawyersSidebar'
import Lawyers from '../components/Lawyers/Lawyers'
import {json, useLoaderData} from 'react-router-dom';
import axios from 'axios';

const LawyersPage = () => {

    //Get the data from the loader
    const data = useLoaderData();

    console.log("Data is: ", data);
    console.log("The keys of data are: ", Object.keys(data));
    const title = "Associates"
    console.log("The associates are: ", data[title]);

    return (
        <>
            <LawyersSidebar />
            <Lawyers data={data}/>
        </>
    )
}

export default LawyersPage;

export const lawyersLoader = async () => {
    try {
        const response = await axios.get("http://localhost:5000/lawyers");
        const data = response.data;
        return data;
    } catch(error) {
        console.log(error);
        throw json({message: "Lawyers could not be retrieved"}, {status: 500});
    }
}