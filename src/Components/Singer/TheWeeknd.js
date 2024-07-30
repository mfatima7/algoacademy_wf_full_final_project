import { image } from "../../Images/Images";
import "../../Css of components/Music.css";
import "../../Css of components/Main.css";
function TheWeeknd() {
  return (
    <div className="music">
    <div className="music_banner">
      <img src={image.TheWeeknd}></img>
      <h2>The Weeknd </h2>
    </div>
    <div className="music-list">
      <div className="m-list">
        <button type="submit">
          <i class="fa-solid fa-play"></i>
        </button>
        <img className="jjc" src={image.weekndah}></img>After Hours <p>02:55</p>
      </div>
      <div className="m-list">
        <button type="submit">
          <i class="fa-solid fa-play"></i>
        </button>
        <img className="jjc" src={image.weeknds} />
        Starboy <p>02:55</p>
      </div>

      <div className="m-list">
        <button type="submit">
          <i class="fa-solid fa-play"></i>
        </button>
        <img className="jjc" src={image.weekndo}></img>Often <p>02:55</p>
      </div>

      <div className="m-list">
        <button type="submit">
          <i class="fa-solid fa-play"></i>
        </button>
        <img className="jjc" src={image.weeknddfy}></img> Die For You <p>02:55</p>
      </div>

      <div className="m-list">
        <button type="submit">
          <i class="fa-solid fa-play"></i>
        </button>
        <img className="jjc" src={image.weekndcomn}></img>Call Out My Name <p>02:55</p>
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
export default TheWeeknd;
