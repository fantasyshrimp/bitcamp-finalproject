import React, { useState } from "react";
import { SignupBtn, Login, Logout, ProfileModal } from "../auth";
import { Nav } from "react-bootstrap";

function AuthBtn(props) {
  let [currentUser, setCurrentUser] = [useState(props.currentUser)];
  currentUser = props.currentUser;
  setCurrentUser = props.setCurrentUser;
  const nickname = currentUser.nickname;

  const handleClickUser = () => {
    return (
      <>
        <ProfileModal show={true} />
      </>
    );
  };

  if (props.currentUser === "") {
    return (
      <>
        <Nav.Link>
          <SignupBtn />
        </Nav.Link>
        <Nav.Link>
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Nav.Link>
      </>
    );
  } else {
    return (
      <>
        <Nav.Link onClick={handleClickUser}>반가워요! {nickname}</Nav.Link>
        <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </>
    );
  }
}

export default AuthBtn;
