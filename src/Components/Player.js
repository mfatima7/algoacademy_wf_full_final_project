import React from "react";
import "../Css of components/Player.css";

const Player = () => {
  return (
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
  );
};

export default Player;
