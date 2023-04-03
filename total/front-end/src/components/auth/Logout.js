import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function Logout(props) {
  let { currentUser, setCurrentUser } = props;

  const handleClickLogout = () => {
    axios
      .get("http://localhost:8080/auth/logout")
      .then((response) => {
        setCurrentUser(null);
        window.location.reload();
      })
      .catch((error) => {
        alert("로그아웃 중 오류 발생!");
      });
  };

  return (
    <>
      <Nav.Link>
        <div onClick={handleClickLogout}>Logout</div>
      </Nav.Link>
    </>
  );
}

export default Logout;
