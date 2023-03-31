import React, { useState } from "react";
import { SignupBtn, Login, Logout, AuthModal } from "../auth";
import { Nav } from "react-bootstrap";

function AuthBtn(props) {
  const [show, setShow] = useState(false);
  const { currentUser, setCurrentUser } = props;

  const handleClickUser = () => {
    setShow(true);
  };

  return (
    <>
      {currentUser ? (
        <>
          <Nav.Link onClick={handleClickUser}>
            반가워요! {currentUser.nickname}
          </Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link>
            <SignupBtn />
          </Nav.Link>
          <Nav.Link>
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Nav.Link>
        </>
      )}

      <AuthModal
        show={show}
        setShow={setShow}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </>
  );
}

export default AuthBtn;
