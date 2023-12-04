import { useContext } from 'react';
import { ContactContext } from '../../store/contexts';


const ContactRequestList = () => {

    const { contactRequests, isLoading, error, deleteContactRequest } = useContext(ContactContext);

    let content;

    if (error) {
        content = <p>An error occurred: {error}</p>
    } else if (isLoading) {
        content = <p>Loading...</p>
    } else if (contactRequests && contactRequests.length > 0) {
        content = contactRequests.map((request) => {
            return (
                <>

                    <h2>{request.firstName} {request.lastName} - {request.email}</h2>
                    <p>{request.message}</p>


                    <button onClick={() => {
                        deleteContactRequest(request.id);
                    }}>Delete</button>
                    <hr />
                </>
            )
        })
    }

    return (
        <>
            <h1>Contact Requests</h1>
            <hr />
            {content}
        </>

    );
}

export default ContactRequestList;