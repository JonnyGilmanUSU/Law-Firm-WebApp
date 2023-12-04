import './ContactForm.css';
import {useState, useContext} from 'react';
import { ContactContext } from '../../store/contexts';

const ContactForm = () => {

    const {postContactRequest} = useContext(ContactContext);

    //State variables for form data
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    // const [contactRequests, setContactRequests] = useState([]);

    // Touched state variables
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastNameTouched, setLastNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [messageTouched, setMessageTouched] = useState(false);

    // Derived values for validing user input
    const firstNameValid = firstName.trim() !== "";
    const lastNameValid = lastName.trim() !== "";
    const emailValid = email.trim() !== "";
    const messageValid = message.trim() !== "";

    // Derived values for showing errors on inputs
    const firstNameShowError = !firstNameValid && firstNameTouched;
    const lastNameShowError = !lastNameValid && lastNameTouched;
    const emailShowError = !emailValid && emailTouched;
    const messageShowError = !messageValid && messageTouched;

    // Derived value for form validity
    const formValid = firstNameValid && lastNameValid && emailValid && messageValid;

    // Handler functions for updating form values in state
    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };

    const messageHandler = (event) => {
        setMessage(event.target.value);
    };

    // Handler functions for updating form touched values
    const firstNameTouchedHandler = (event) => {
        setFirstNameTouched(true);
    };

    const lastNameTouchedHandler = (event) => {
        setLastNameTouched(true);
    };

    const emailTouchedHandler = (event) => {
        setEmailTouched(true);
    };

    const messageTouchedHandler = (event) => {
        setMessageTouched(true);
    };

    // Form submit handler
    const submitHandler = (event) => {
        // prevent form from being submitted back to server
        event.preventDefault();

        // setContactRequests((prevContactRequests) => {
        //     let newContactRequests =  [
        //         ...prevContactRequests,
        //         {firstName: firstName, lastName: lastName, email: email, message: message}
        //     ];

            // console.log("New contact requests: ", newContactRequests);
            // return newContactRequests;
        // });

        postContactRequest(firstName, lastName, email, message);

        // clear form values
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');

        //reset touched state
        setFirstNameTouched(false);
        setLastNameTouched(false);
        setEmailTouched(false);
        setMessageTouched(false);

        setFormSubmitted(true);
    }

    return (
        <>
        <h1>Contact</h1>
				<h2>Send Us a Quick Message</h2>
				<p>
					You can remove any link to our website from this website template, you're free to use this website template without linking back to us.If you're having problems editing this website template, then don't hesitate to ask for help on the Forums.
				</p>
				<form onSubmit={submitHandler} method="post" className="message">
					<label>First Name</label>
					<input className={firstNameShowError ? "error" : ""} type="text" onChange={firstNameHandler} onBlur={firstNameTouchedHandler} value={firstName} />
					{firstNameShowError && <p>First name cannot be blank!</p>}
                    <label>Last Name</label>
					<input type="text" className={lastNameShowError ? "error" : ""} onChange={lastNameHandler} onBlur={lastNameTouchedHandler} value={lastName} />
					{lastNameShowError && <p>Last name cannot be blank!</p>}
                    <label>Email Address</label>
					<input type="text" className={emailShowError ? "error" : ""} onChange={emailHandler} onBlur={emailTouchedHandler} value={email} />
					{emailShowError && <p>Email cannot be blank!</p>}
                    <label>Message</label>
					<textarea className={messageShowError ? "error" : ""} onChange={messageHandler} onBlur={messageTouchedHandler} value={message}></textarea>
					{messageShowError && <p>Message cannot be blank!</p>}
                    <input type="submit" disabled={!formValid} value="Send Message" />
                    {formSubmitted && <p>Thank you!  We'll get back to you soon!</p>}
                </form>

                </>
    );
}

export default ContactForm;