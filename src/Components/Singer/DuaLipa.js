import { image } from "../../Images/Images";
import "../../Css of components/Music.css";
import "../../Css of components/Main.css";
function DuaLipa() {
  return (
    <div className="music">
      <div className="music_banner">
        <img src={image.DuaLipa}></img>
        <h2>Dua Lipa </h2>
      </div>
      <div className="music-list">
        <div className="m-list">
          <button type="submit">
            <i class="fa-solid fa-play"></i>
          </button>
          <img className="jjc" src={image.duanr}></img>New Rules <p>02:55</p>
        </div>
        <div className="m-list">
          <button type="submit">
            <i class="fa-solid fa-play"></i>
          </button>
          <img className="jjc" src={image.duala} />
          Love Again <p>02:55</p>
        </div>

        <div className="m-list">
          <button type="submit">
            <i class="fa-solid fa-play"></i>
          </button>
          <img className="jjc" src={image.dual}></img>Levitating <p>02:55</p>
        </div>

        <div className="m-list">
          <button type="submit">
            <i class="fa-solid fa-play"></i>
          </button>
          <img className="jjc" src={image.duabym}></img>Blow Your Mind <p>02:55</p>
        </div>

        <div className="m-list">
          <button type="submit">
            <i class="fa-solid fa-play"></i>
          </button>
          <img className="jjc" src={image.duanl}></img>No Lie <p>02:55</p>
        </div>
      </div>
      <div className="player">
        <div className="player-left">
          <div className="song-info">
            <h4>Song Title</h4>
            <p>Artist Name</p>
          </div>
        </div>
        <div className="player-center">
          <div className="controls">
            <button className="control-button">
              <i className="fa-solid fa-backward-fast"></i>
            </button>
            <button className="control-button">
              <i className="fa-solid fa-pause"></i>
            </button>
            <button className="control-button">
              <i className="fa-solid fa-forward-fast"></i>
            </button>
          </div>
          <div className="timeline">
            <span className="current-time">0:00</span>
            <input type="range" className="progress-bar" />
            <span className="total-time">3:30</span>
          </div>
        </div>
        <div className="player-right">
          <button className="control-button">🔊</button>
          <input type="range" className="volume-control" />
        </div>
      </div>
    </div>
  );
}
export default DuaLipa;
