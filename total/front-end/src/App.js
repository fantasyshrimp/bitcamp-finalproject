import "./styles/App.css";
import React, { useState } from "react";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/profile/Profile";
import BackgroundSlider from "./pages/Main/BackgroundSlider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Feed" element={<Feed />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/backgroundSlider" element={<BackgroundSlider />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
