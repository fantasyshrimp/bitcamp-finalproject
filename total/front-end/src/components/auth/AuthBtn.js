import React, { useState, useEffect } from "react";
import { SignupBtn, Login, Logout, AuthModal } from "../auth";
import { Nav } from "react-bootstrap";
import { BellFill } from "react-bootstrap-icons";
import axios from "axios";
axios.defaults.withCredentials = true;

function AuthBtn(props) {
  const [show, setShow] = useState(false);
  const { currentUser, setCurrentUser } = props;

  const handleClickUser = () => {
    setShow(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8080/");
        if (result.data.status == "success") {
          // setCurrentUser(result.data.data);
        } else {
          // setCurrentUser(null);
        }
      } catch (error) {
        alert("알림 현황 가져오는 중 오류 발생!");
      }
    };

    fetchData();
  }, []);

  const handleClickBell = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {currentUser ? (
        <>
          <a
            href=""
            className="d-flex align-items-center"
            onClick={handleClickBell}
          >
            <BellFill size="1.4rem" className="me-2 text-light " />
          </a>
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
