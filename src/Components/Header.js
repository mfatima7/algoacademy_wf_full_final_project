import "../Css of components/Header.css";
import { Link, Route, Routes } from "react-router-dom";

function Header({ children, searchInput = false }) {
  return (
    <div className="main">
      <div className="topNav">
        <div className="prevbtn">
          <button>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        {searchInput ? (
          <div className="srch">
             <i className="fa-solid fa-magnifying-glass"></i> 
            <input
              className="searchholder"
              placeholder=" What do you want to play?"
            />
          </div>
        ) : (
          ""
        )}
        <div className="loginbtn">
          <a href="" className="sign">
            Sign Up
          </a>
          <Link to="/login" className="log">
            Log in
          </Link>
        </div>
      </div>
      <div className="holder">{children}</div>
    </div>
  );
}
export default Header;
