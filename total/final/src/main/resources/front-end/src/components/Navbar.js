import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "./Navbar.css";
import axios from "axios";

axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function Navbar() {
  let [currentUser, setCurrentUser] = useState("");

  const AuthBtn = () => {
    if (currentUser === "") {
      return (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      );
    } else {
      return (
        <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} />
      );
    }
  };

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
      <div id="modal-back">
        <AuthBtn />
      </div>
    </div>
  );
}

function Logout(props) {
  let [currentUser, setCurrentUser] = [useState(props.currentUser)];
  setCurrentUser = props.setCurrentUser;

  const handleLogoutClick = () => {
    axios
      .get("http://localhost:8080/auth/logout")
      .then((response) => {
        setCurrentUser("");
      })
      .catch((error) => {
        alert("로그아웃 중 오류 발생!");
      });
  };

  return (
    <>
      <p id="logout-btn" onClick={handleLogoutClick}>
        Logout
      </p>
    </>
  );
}

function Login(props) {
  const [show, setShow] = useState(false);
  let [currentUser, setCurrentUser] = [useState(props.currentUser)];
  setCurrentUser = props.setCurrentUser;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ShowUser = () => {
    axios
      .get("http://localhost:8080/auth/user")
      .then((response) => {
        setCurrentUser(response.data.data.nickname);
      })
      .catch((error) => {
        alert("로그인 유저 가져오는 중 오류 발생!");
      });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios
      .post("http://localhost:8080/auth/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          ShowUser();
          handleClose();
        } else {
          console.log(response);
        }
      })
      .catch((error) => {
        alert("로그인 중 오류 발생");
      });
  }

  return (
    <>
      <p id="login-btn" onClick={handleShow}>
        Login
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ width: "100%", height: "100%", backgroundColor: "#00000000" }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">반갑습니다!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-dark">
                사용자의 이메일 주소를 입력해주세요
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-dark">
                사용자의 비밀번호를 입력해주세요
              </Form.Label>
              <Form.Control type="password" name="password" />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
