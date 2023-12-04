import {useState} from 'react';
import SampleContext from "./contexts";

const SampleContextProvider = (props) => {
    
    // manage state
    // data access
    // etc.

    const [sampleState, setSampleState] = useState({title: "React is cool!", text: "Learn it today!"})

    return (
        <SampleContext.Provider value={sampleState}>
            {props.children}
        </SampleContext.Provider>
    );
}

export default SampleContextProvider;