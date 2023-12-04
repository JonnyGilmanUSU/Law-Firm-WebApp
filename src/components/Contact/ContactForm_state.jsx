import './ContactForm.css';
import { useState, useContext } from 'react';
import { ContactContext } from '../../store/contexts';
import useInput from '../../hooks/use-input';

const ContactForm = () => {

    // Import needed values from context
    const { isLoading, error, postContactRequest } = useContext(ContactContext);

    // Define validation functions for form inputs
    // these wil be passed to the useInput hook
    const isNotEmpty = (value) => value.trim() !== "";
    const isEmail = (value) => value.includes("@");

    // Call the useInput hook to manage state for all form inputs
    const {
        value: firstName,
        isValid: firstNameValid,
        hasError: firstNameShowError,
        valueChangeHandler: firstNameHandler,
        inputBlurHandler: firstNameTouchedHandler,
        reset: resetFirstName } = useInput(isNotEmpty);

    const {
        value: lastName,
        isValid: lastNameValid,
        hasError: lastNameShowError,
        valueChangeHandler: lastNameHandler,
        inputBlurHandler: lastNameTouchedHandler,
        reset: resetLastName } = useInput(isNotEmpty);

    const {
        value: email,
        isValid: emailValid,
        hasError: emailShowError,
        valueChangeHandler: emailHandler,
        inputBlurHandler: emailTouchedHandler,
        reset: resetEmail } = useInput(isEmail);

    const {
        value: message,
        isValid: messageValid,
        hasError: messageShowError,
        valueChangeHandler: messageHandler,
        inputBlurHandler: messageTouchedHandler,
        reset: resetMessage } = useInput(isNotEmpty);

    const [formSubmitted, setFormSubmitted] = useState(false);


    // Derived value for form validity
    const formValid = firstNameValid && lastNameValid && emailValid && messageValid;

    // Form submit handler
    const submitHandler = (event) => {
        // prevent form from being submitted back to server
        event.preventDefault();

        postContactRequest(firstName, lastName, email, message);

        // Use hook functions to reset inputs
        resetFirstName();
        resetLastName();
        resetEmail();
        resetMessage();

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
                {isLoading && <p>Sending your data...</p>}
                {error && <p>Oops, something went wrong: {error}</p>}
            </form>

        </>
    );

}
export default ContactForm;