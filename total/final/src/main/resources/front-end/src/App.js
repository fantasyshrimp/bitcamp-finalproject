import "./styles/App.css";
<<<<<<< HEAD
import React, { useState } from "react";
import Footer from "./components/Footer";
import HomeAim from "./pages/HomeAim";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Modal, Form, Button } from "react-bootstrap";
=======
import React from "react";
import NavbarAim from "./components/NavbarAim";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> main

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeAim />}></Route>
=======
        <NavbarAim />
        <Routes>
          <Route path="/" element={<Home />}></Route>
>>>>>>> main
          <Route path="/Feed" element={<Feed />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
