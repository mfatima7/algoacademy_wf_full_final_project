import { useNavigate } from "react-router-dom";
import "../Css of components/Login.css";
import { image } from "../Images/Images";
function Login() {
  let navigate = useNavigate();

  function checkData() {
    fetch("api", { username: "asdfg", password: "asdfgh" })
      .then(navigate("/"))
      .catch();
  }

  return (
    <div className="login">
      <div className="login-container" onClick={checkData}>
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
        <form class="login-form">
          <div className="email">
            <p>Email or username</p>
            <input type="text" placeholder="Email or username" required />
          </div>
          <div className="password">
            <p>Password</p>
            <input type="password" placeholder="Password" required />
          </div>
          {/* <div className="rememberme" >
            
          </div> */}

          <button typeof="submit" className="login-btn">
            Log in
          </button>
          <a href="#" className="forgetPassword">
            Forget your password?
          </a>
        </form>
        <hr className="line"></hr>
        <p className="acc">
          Don't have an account?  
          <a href="" className="signup-link">
              Sign up for Spotify
          </a>
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
