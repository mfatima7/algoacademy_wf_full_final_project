import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Main from "./Components/Main.js";
import Signup from "./Components/Signup.js";
import Search from "./Components/Search.js";
import Nav from "./Components/Nav.js";
import Podcasts from "./Components/Podcasts.js";
import Player from "./Components/Player.js";
import Music from "./Components/Music.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainplay">
              <Main /> <Player />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/music"
          element={
            <div className="music">
              <Music />
              <Nav />
              <Player />
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div className="msearch">
              <Nav></Nav>
              <Search className="searchholder" searchInput={true}></Search>
            </div>
          }
        />
        <Route
          path="/createlibrary"
          element={
            <Main>
              <div>Create library</div>
            </Main>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/podcasts"
          element={
            <div className="mpodcast">
              {" "}
              <Podcasts /> <Nav />
              <Player />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
