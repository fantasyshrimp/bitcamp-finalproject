import React, { useState } from "react";
import { SignupBtn, Login, Logout } from "../auth";
import { Nav } from "react-bootstrap";

function AuthBtn(props) {
  let [currentUser, setCurrentUser] = [useState(props.currentUser)];
  currentUser = props.currentUser;
  setCurrentUser = props.setCurrentUser;
  const nickname = currentUser.nickname;

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
        <div className="text-light">{}</div>
        <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} />
      </>
    );
  }
}

export default AuthBtn;
