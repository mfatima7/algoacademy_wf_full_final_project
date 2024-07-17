import "../Css of components/Main.css";

function Main() {
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
        <div className="loginbtn">
          <button className="sign">Sign Up</button>
          <button className="log">Log in</button>
        </div>
      </div>
    </div>
  );
}
export default Main;
