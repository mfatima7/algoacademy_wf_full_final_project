import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();

  function checkData() {
    fetch("api", { username: "asdfg", password: "asdfgh" })
      .then(navigate("/"))
      .catch();
  }

  return <div onClick={checkData}>Login</div>;
}

export default Login;
