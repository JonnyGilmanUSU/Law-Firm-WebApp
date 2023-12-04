import {useState, useContext} from 'react';
import NameDisplay from './NameDisplay';
import SampleContext from '../../store/contexts';



const StatePlayground = () => {

    //Get access to sample context
    const ctxSample = useContext(SampleContext);

    // let name = "";
    //State variable for managing the name entered by the user
    const [name, setName] = useState('');
    const [nameCopied, setNameCopied] = useState(false);
    const [counter, setCounter] = useState(0);

    const printNameHandler = (event) => {
        //name = event.target.value;  //Gives us access to the value of the element that triggered the event
        setName(event.target.value);
        console.log("Name is: ", name);
    }

    const copyNameHandler = (event) => {
        setNameCopied(true);
    }

    const counterClickHandler = (event) => {
        setCounter((prevCounter) => {return prevCounter + 1});
    }
    return (
        <>
            <p>The value of the sample context is: {ctxSample.text}</p>
            <NameDisplay name={name} onEntry={printNameHandler} onCopy={copyNameHandler} theNameCopied={nameCopied} />

            <h2>Counter</h2>
            <button onClick={counterClickHandler}>Increment Counter</button>
            <p>Counter: {counter}</p>
        </>
    );
}

export default StatePlayground;