import "./styles/reset.css";
import "./styles/App.css";
import React from "react";
import NavbarAim from "./components/NavbarAim";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarAim />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Feed" element={<Feed />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
