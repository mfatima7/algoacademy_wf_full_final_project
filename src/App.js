import Nav from ".//Components/Nav.js";
import Header from ".//Components/Header.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Main from "./Components/Main.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Main>
              <div>Home</div>
              <div>Home</div>
              <div>Home</div>
            </Main>
          }
        />
        <Route path="/search"  element={<Main searchInput={true}></Main>} />
        <Route
          path="/createlibrary"
          element={
            <Main>
              <div>Create library</div>
            </Main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
