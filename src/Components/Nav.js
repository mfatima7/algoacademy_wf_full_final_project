import { Link } from "react-router-dom";
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
        <Link to="/">
          <i className="fa-solid fa-house"></i> Home
        </Link>
        <Link to="/search">
          <i className="fa-solid fa-magnifying-glass"></i> Search
        </Link>
      </div>

      <div className="sideBarDn">
        <Link to="/podcasts">
        <i className="fa-solid fa-headphones"></i> Podcasts
        </Link>
        <div className="navbarScroll">
          <div className="scroll">
            <h4>Let's find some podcasts to follow</h4>
            <p>We'll keep you updated on new episodes</p>
            <Link to="/podcasts" className="button">
              Browse podcasts
            </Link>
          </div>
        </div>
        <div className="privacy">
          <span className="other">
            <div className="other">
              <a href="https://www.spotify.com/az-en/legal/end-user-agreement/">
                Legal
              </a>
              <a href="https://www.spotify.com/az-en/safetyandprivacy/reporting-content">
                Safety & Privacy Center
              </a>
              <a href="https://www.spotify.com/az-en/legal/privacy-policy/">
                Privacy Policy
              </a>
            </div>
            <div className="other">
              <a href="https://www.spotify.com/az-en/legal/cookies-policy/">
                Cookies
              </a>
              <a href="https://www.spotify.com/az-en/legal/privacy-policy/#s3">
                About Ads
              </a>
              <a href="https://www.spotify.com/az-en/accessibility">
                Accessibility
              </a>
            </div>
            <div className="other">
              <a href="https://www.spotify.com/az-en/legal/cookies-policy/">
                Cookies
              </a>
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
