import {useState, useEffect} from 'react';
import { PracticesContext } from "./contexts";
import useHttp from "../hooks/use-http";

const PracticesContextProvider = (props) => {
    //State variable for storing practices
    const [practices, setPractices] = useState([]);

    //Call the hook
    const {isLoading, error, sendRequest: getPractices} = useHttp();

    //Retrieve the data using the hook when component first loads
    useEffect(() => {
        getPractices({url: 'http://localhost:5000/practices'}, setPractices)
    }, [getPractices]);

    //Return the provider
    return(
        <PracticesContext.Provider value={{
            practices,
            isLoading,
            error
        }}>
            {props.children}
        </PracticesContext.Provider>
    );

}

export default PracticesContextProvider;