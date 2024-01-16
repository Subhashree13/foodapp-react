import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [buttonState, setButtonState] = useState("Login");
  const toggleAuthButton = () => {
    if (buttonState === "Login") {
      setButtonState("Logout");
    } else {
      setButtonState("Login");
    }
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Foodie" />
      </div>
      <div className="navbar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <li>Cart</li>
        </ul>
        <button className="auth-button" onClick={toggleAuthButton}>
          {buttonState}
        </button>
      </div>
    </div>
  );
};

export default Header;
