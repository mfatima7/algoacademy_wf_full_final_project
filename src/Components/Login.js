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
          <i class="fa-brands fa-spotify"></i>
        </div>
        <h1>Log in to Spotify</h1>
        <div class="login-buttons">
          <button className="login-button google">
            <img src={image.google}></img> Continue with Google
          </button>
          <button className="login-button facebook">
            <img src={image.facebook}></img>Continue with Facebook
          </button>
          <button className="login-button apple">   <img src={image.apple}></img> Continue with Apple</button>
        </div>
        <hr className="line" ></hr>
        <form class="login-form">
          <input type="text" placeholder="Email or username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
