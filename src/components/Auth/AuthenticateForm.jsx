import { Form, Link, useSearchParams } from "react-router-dom";
import "./AuthenticateForm.css";
import Main from "../UI/Main/Main";

const AuthenticateForm = () => {
  // Get mode (login or signup) from searchParams
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const redirectTo = searchParams.get("redirect");
  const loginMode = mode === "login";

  return (
    <Main>
      <h1>{loginMode ? "Log In" : "Sign Up"}</h1>

      <Form method="post" className="message" action={loginMode ? `/login?redirect=${redirectTo}` : `/signup?redirect=${redirectTo}`}>
        {!loginMode && (
          <>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" required />
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" required />
          </>
        )}

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required></input>
        <input type="submit" value={loginMode ? "Log In" : "Sign Up"} />
      </Form>
      <Link to={loginMode ? `?mode=signup&redirect=${redirectTo}` : `?mode=login&redirect=${redirectTo}`}>
        {loginMode
          ? "New here?  Create an account!"
          : "Already have an account? Click to Login"}
      </Link>
    </Main>
  );
};

export default AuthenticateForm;
