import { useNavigate } from "react-router-dom";
import "../Css of components/Login.css";
import { image } from "../Images/Images";
import { useState } from "react";
import { loginUser } from "../api";
import { Link } from "react-router-dom";
import Signup from "./Signup";
function Login() {
  // let navigate = useNavigate();

  // function checkData() {
  //   fetch()
  //     .then(navigate("/"))
  //     .catch();
  // }

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ message, setMessage ] = useState("");
  let tohome = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token',data.token);
      localStorage.setItem("email", JSON.stringify(email));
      setMessage(data.message);
      tohome("/")
    } catch (error) {
      setMessage(error.error);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div class="login-logo">
          <img src={image.minilogo} />
        </div>
        <h1>Log in to Spotify</h1>
        <div class="login-buttons">
          <button className="login-button google">
            <img src={image.google}></img> Continue with Google
          </button>
          <button className="login-button facebook">
            <img src={image.facebook}></img>Continue with Facebook
          </button>
          <button className="login-button apple">
            {" "}
            <img src={image.apple}></img> Continue with Apple
          </button>
        </div>
        <hr className="line"></hr>
        <form class="login-form" onSubmit={handleRegister}>
          <div className="email">
            <p>Email or username</p>
            <input
              type="text"
              placeholder="Email or username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <p>Password</p>
            <input type="password" placeholder="Password" required  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <button typeof="submit" className="login-btn">
            Log in
          </button>
        </form>
        <hr className="line"></hr>
        <p className="acc">
          Don't have an account?
          <Link to='/signup' className="signup-link">
            Sign up for Spotify
          </Link>
        </p>
      </div>
      <div className="logfooter">
        This site is protected by reCAPTCHA and the Google
        <a href=""> Privacy Policy </a> and <a href=""> Terms of Service </a>
        apply.
      </div>
    </div>
  );
}

export default Login;
