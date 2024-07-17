import "../Css of components/Nav.css";
import { image } from "../Images/Images";
function Nav() {
  return (
    <div className="nav">
      <div className="sideBarUp">
        <div className="logo">
          <a href="">
            <img src={image.logo}></img>
          </a>
        </div>
        <a href="">
          <i className="fa-solid fa-house"></i> Home
        </a>
        <a href="">
          <i className="fa-solid fa-magnifying-glass"></i> Search
        </a>
      </div>

      <div className="sideBarDn">
        <a href="">
          <i className="fa-solid fa-book"></i> Your Library{" "}
          <span className="spec">
            <i className="fa-solid fa-plus"></i>
          </span>
        </a>
        <div className="navbarScroll">
          <div className="scroll">
            <h4>Create your first playlist</h4>
            <p>It's easy,we'll help you</p>
            <a href="" className="button">Create playlist</a>
          </div>
          <div className="scroll">
            <h4>Let's find some podcasts to follow</h4>
            <p>We'll keep you updated on new episodes</p>
            <a  href="" className="button">Browse podcasts</a>
          </div>
        </div>
        <div className="privacy">
          <span className="other">
            <div className="other">
              <a href="https://www.spotify.com/az-en/legal/end-user-agreement/">Legal</a>
              <a href="https://www.spotify.com/az-en/safetyandprivacy/reporting-content">Safety & Privacy Center</a>
              <a href="https://www.spotify.com/az-en/legal/privacy-policy/">Privacy Policy</a>
            </div>
            <div className="other">
              <a href="https://www.spotify.com/az-en/legal/cookies-policy/">Cookies</a>
              <a href="https://www.spotify.com/az-en/legal/privacy-policy/#s3">About Ads</a>
              <a href="https://www.spotify.com/az-en/accessibility">Accessibility</a>
            </div>
            <div className="other">
              <a href="https://www.spotify.com/az-en/legal/cookies-policy/">Cookies</a>
            </div>
          </span>
        </div>
        <a href="" className="languagebtn">
          <i className="fa-solid fa-globe"></i> English
        </a>
      </div>
    </div>
  );
}
export default Nav;
