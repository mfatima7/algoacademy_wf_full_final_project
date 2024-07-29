import { image } from "../Images/Images";
import "../Css of components/Music.css";
function Music() {
  return (
    <div className="music_banner">
      <img src={image.jbanner}></img>
      <h1>Jennie Kim</h1>
      <span className="music-list">
        <div className="m-list"></div>
        <div className="m-list"></div>
        <div className="m-list"></div>
        <div className="m-list"></div>
        <div className="m-list"></div>
      </span>
    </div>
  );
}
export default Music;
