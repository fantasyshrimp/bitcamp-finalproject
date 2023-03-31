import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from "axios";
import Post from "./Post";
import { AuthBtn } from "./auth";
import getCurrentUser from "./getCurrentUser";
axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function Navbar() {
  let [currentUser, setCurrentUser] = useState("");
  getCurrentUser(setCurrentUser);

  return (
    <div id="nav-bar">
      <Link to="/">
        <h1 id="title">Artify</h1>
      </Link>
      <Link to="/Feed/">
        <h1 id="title">Feed</h1>
      </Link>
      <Link to="/Profile">
        <h1 id="title">Profile</h1>
      </Link>
      <div>
        <Post />
      </div>
      <div>
        <AuthBtn currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </div>
    </div>
  );
}

export default Navbar;
