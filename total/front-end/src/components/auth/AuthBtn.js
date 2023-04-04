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
          <Nav.Link
            onClick={handleClickUser}
            style={{ padding: "0" }}
            className="d-flex"
          >
            <div
              className="me-2 d-flex align-items-center"
              style={{ display: "inline-block" }}
            >
              {currentUser.nickname}
            </div>
            <div
              key={currentUser.profilePhoto}
              style={{
                backgroundImage: `url(${currentUser.profilePhoto})`,
                backgroundSize: "cover",
                width: "40px",
                height: "40px",
                display: "inline-block",
                borderRadius: "50%",
              }}
            />
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
