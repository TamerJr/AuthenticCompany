import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../../Contexts/AuthContext";
import "./LogIn.css";
const LogIn = () => {
  const { logIn ,setEmail,setPassword} = useContext(userContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    logIn();
  };
  return (
    <form onSubmit={handleLogIn}>
      <fieldset className="SignInForm">
        <legend>Log In</legend>
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
          Wanna Create Account <Link to="/signup">Sign Up</Link>
        </p>
        <button>Log In</button>
      </fieldset>
    </form>
  );
};

export default LogIn;
