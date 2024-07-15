import "../Css of components/Nav.css";
import { image } from "../Images/Images";
function Nav() {
  return (
    <div className="nav">
      <div className="sideBarUp">
        <div className="logo">
          <a>
            <img src={image.logo}></img>
          </a>
        </div>
        <a>
          <i class="fa-solid fa-house"></i> Home
        </a>
        <a>
          <i class="fa-solid fa-magnifying-glass"></i> Search
        </a>
      </div>

      <div className="sideBarDn">
        <a>Your Library</a>
        <></>
        <div className="sections">
          <a>Legal</a>
          <a>Safety & Privacy Center</a>
          <a>Privacy Policy</a>
          <a>Cookies</a>
          <a>About Ads</a>
          <a>Accessibility</a>
          <a>Cookies</a>
        </div>
      </div>
    </div>
  );
}
export default Nav;
