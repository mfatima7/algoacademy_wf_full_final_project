import "../Css of components/Header.css";
import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="topNav">
        <div className="loginbtn">
          <Link to="/signup" className="sign">
            Sign Up
          </Link>
          <Link to="/login" className="log">
            Log in
          </Link>
        </div>
      </div>
      <div className="holder"></div>
    </div>
  );
}
export default Header;
