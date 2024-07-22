import Nav from ".//Components/Nav.js";
import Header from ".//Components/Header.js";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login.js";
import Layout from "./Components/Layout.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Layout>
              <div>Home</div>
              <div>Home</div>
              <div>Home</div>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout searchInput={true}>
              <div>Search</div>
              <div>Search</div>
            </Layout>
          }
        />
        <Route
          path="/createlibrary"
          element={
            <Layout>
              <div>Create library</div>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
