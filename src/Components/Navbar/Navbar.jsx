import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../Contexts/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Logo.png";
import "./Navbar.css";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { user, LogOut } = useContext(userContext);
  const handleAuthLogInOut = (AuthAction) => {
    navigate(`/${AuthAction}`);
  };
  const handleToggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="Logo" title="Authentic Company"/>
      </Link>
      <ul className="navigationList" >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Products</Link>
        </li>
        <li>
          <Link to="/Terms">Terms</Link>
        </li>
        {user && (
          <Link to="/Account">
            <li>Account</li>
          </Link>
        )}
      </ul>
      <GiHamburgerMenu className="MenuToggler" size={25} onClick={handleToggleMenu} />
      {toggle && (
        <div className="ToggleMenu">
          <ul
            className="navigationList navigationMenuMob"
            alt="Logo"
            title="Authentic Company"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Products</Link>
            </li>
            <li>
              <Link to="/Terms">Terms</Link>
            </li>
            {user && (
              <Link to="/Account">
                <li>Account</li>
              </Link>
            )}
          </ul>
          <ul className="AuthMenu">
            {user ? (
              <li>
                <button className="LogOut" onClick={LogOut}>
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <button
                  className="LogIn"
                  onClick={() => handleAuthLogInOut("login")}
                >
                  Log In
                </button>
              </li>
            )}
            <li>
              <button
                className="SignUp"
                onClick={() => handleAuthLogInOut("signup")}
              >
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
