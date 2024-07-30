import Header from "./Header";
import Nav from "./Nav";
import Ariana from "../Components/Singer/Ariana";
import "../Css of components/Main.css";
import { image } from "../Images/Images";
import { Link } from "react-router-dom";

function Main({ children, searchInput = false }) {
  return (
    
    <div className="main">
      <Nav></Nav>
      <Header searchInput={searchInput}>{children}</Header>
      <div className="artists">
        <h2>Popular artists</h2>
        <div className="artist-list">
          <Link to={"/ArianaGrande"} className="artist">
            <img src={image.ArianaGrande}></img> Ariana Grande
          </Link>
          <Link to={"/DuaLipa"} className="artist">
            {" "}
            <img src={image.DuaLipa}></img> Dua Lipa
          </Link>
          <Link to={"/TheWeeknd"} className="artist">
            {" "}
            <img src={image.TheWeeknd}></img> The Weeknd
          </Link>
          <Link to={"/Tyla"} className="artist">
            {" "}
            <img src={image.Tyla}></img> Tyla
          </Link>
          <Link to={"/Jennie"} className="artist">
            {" "}
            <img src={image.Jennie}></img> Jennie
          </Link>
        </div>
      </div>
      <div className="albums">
        <h2>Popular albums</h2>
        <div className="albums-list">
        <div className="album">
          <img src={image.Positions}></img> Positions
          <p className="author" >Ariana Grande</p>
          </div>
          <div className="album">
            <img src={image.DuaLipaA}></img> Radical Optimism
            <p className="author" >Dua Lipa</p>
          </div>
          <div className="album">
          <img src={image.Weekendd}></img> Starboy
          <p className="author" >The Weeknd</p>
          </div>
          <div className="album">
          <img src={image.Tylaa}></img> Tyla
          <p className="author" >Tyla</p>
          </div>
          <div className="album">
          <img src={image.JennieA}></img> You & Me
          <p className="author" >Jennie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
