import "../Css of components/Signup.css";
import { image } from "../Images/Images";
import { registerUser } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let tohome = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(email, password);
      setMessage(data.message);
      tohome("/");
    } catch (error) {
      setMessage(error.error);
    }
    tohome("/");
  };
  return (
    <div className="signup">
      <div class="login-logo">
        <img src={image.minilogo} />
      </div>
      <h1>Sign up and immerse</h1>
      <h1> yourself in music</h1>
      <form className="email-sign" onSubmit={handleRegister} action={Login}>
        <p>Email</p>
        <input
          type="email"
          placeholder="name@domain.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password">
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button typeof="submit" className="login-btn">
          Sign Up
        </button>
      </form>
      <div className="line-container">
        <div className="line-sign"></div>
        <div className="line-text">or</div>
        <div className="line-sign"></div>
      </div>
      <div class="login-buttons">
        <button className="login-button google">
          <img src={image.google}></img> Continue with Google
        </button>
        <button className="login-button facebook">
          <img src={image.facebook}></img>Continue with Facebook
        </button>
        <button className="login-button apple">
          <img src={image.apple}></img> Continue with Apple
        </button>
      </div>
    </div>
  );
}
export default Signup;
