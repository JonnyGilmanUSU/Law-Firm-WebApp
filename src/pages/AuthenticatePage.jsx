import AuthenticateForm from "../components/Auth/AuthenticateForm";
import { useActionData } from "react-router-dom";

const AuthenticatePage = () => {

    const data = useActionData();

    if (data && data.request.status !== 200)
    {
        // An error has occurred
        {
        <>
        <p>Oops, an error occurred:</p>
        <p>{data.message} {data.response.data.error.message}</p>
        </>
    }
    }
    return(<AuthenticateForm />)
}

export default AuthenticatePage;