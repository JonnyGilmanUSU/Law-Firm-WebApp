import './ContactForm.css';
import {useState, useRef, useContext} from 'react';


import { ContactContext } from '../../store/contexts';

const ContactForm = () => {

    const ctxContact = useContext(ContactContext);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    // const [contactRequests, setContactRequests] = useState([]);
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [formSubmitted, setFormSubmitted] = useState(false);

       
    // Form submit handler
    const submitHandler = (event) => {
        // prevent form from being submitted back to server
        event.preventDefault();

        const firstName = firstNameRef.current.value;
        const lastName = lastNameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        // Validate email
        if (email.includes('@')) {
            setEmailIsValid(true);

            //Post data to database
            ctxContact.postContactRequest(firstName, lastName, email, message);

            //Set form submitted
            setFormSubmitted(true);
  
            // clear form values
    
            firstNameRef.current.value = '';
            lastNameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        } else {
            setEmailIsValid(false);
        }

       

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
					<input type="text" ref={firstNameRef} />
					<label>Last Name</label>
					<input type="text" ref={lastNameRef} />
					<label>Email Address</label>
					<input type="text" ref={emailRef} />
					<label>Message</label>
					<textarea ref={messageRef}></textarea>
					<input type="submit" value="Send Message" />
                    {!emailIsValid && <p>Email address is not valid.  Please include @.</p>}
                    {formSubmitted && <p>Thank you!  We'll get back to you soon!</p>}
				</form>

                {/* <ContactRequestList requests={contactRequests} /> */}
                </>
    );
}

export default ContactForm;