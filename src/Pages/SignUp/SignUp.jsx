import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../Contexts/AuthContext";
import "./SignUp.css";
const SignUp = () => {
  const { signUp, setEmail, setPassword } = useContext(userContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    signUp();
  };
  return (
    <form onSubmit={handleSignUp}>
      <fieldset className="SignUpForm">
        <legend>Sign Up</legend>
        <p>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
        </p>
        <p>
          Already Have One <Link to="/login">Log In</Link>
        </p>
        <button>Sign Up</button>
      </fieldset>
    </form>
  );
};

export default SignUp;
