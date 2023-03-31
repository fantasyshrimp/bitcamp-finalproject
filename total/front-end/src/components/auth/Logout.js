import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function Logout(props) {
  let [currentUser, setCurrentUser] = [useState(props.currentUser)];
  setCurrentUser = props.setCurrentUser;

  const handleLogoutClick = () => {
    axios
      .get("http://localhost:8080/auth/logout")
      .then((response) => {
        setCurrentUser("");
        window.location.reload();
      })
      .catch((error) => {
        alert("로그아웃 중 오류 발생!");
      });
  };

  return (
    <>
      <Nav.Link>
        <div onClick={handleLogoutClick}>Logout</div>
      </Nav.Link>
    </>
  );
}

export default Logout;
