import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import "./Navbar.css";
import axios from "axios";

axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function getCurrentUser(cb) {
  axios
    .get("http://localhost:8080/auth/user")
    .then((response) => {
      if (response.data.status === "success") {
        cb(response.data.data.nickname);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("로그인 유저 가져오는 중 오류 발생!");
    });
}

function Navbar() {
  let [currentUser, setCurrentUser] = useState("");
  getCurrentUser(setCurrentUser);

  const AuthBtn = () => {
    if (currentUser === "") {
      return (
        <>
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
          <SignupBtn />
        </>
      );
    } else {
      return (
        <>
          <Logout currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </>
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
      <div>
        <AuthBtn />
      </div>
    </div>
  );
}

function SignupBtn(props) {
  const [show, setShow] = useState(false);
  let [currentUser, setCurrentUser] = [useState(props.currentUser)];
  setCurrentUser = props.setCurrentUser;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function checkEmail() {
    const email = document.getElementsByName("email")[0].value;

    axios
      .get("http://localhost:8080/auth/checkemail", {
        params: { email: email },
      })
      .then((response) => {
        if (response.data.status === "success") {
          alert("이미 가입된 이메일입니다.");
        } else {
          alert("사용가능한 이메일입니다.");
          // emailChecked = true
        }
      })
      .catch((error) => {
        alert("이메일 중복확인 중 오류 발생");
      });
  }

  function checkNickname() {
    const nickname = document.getElementsByName("nickname")[0].value;

    axios
      .get("http://localhost:8080/auth/checknickname", {
        params: { nickname: nickname },
      })
      .then((response) => {
        if (response.data.status === "success") {
          alert("이미 사용중인 닉네임입니다.");
        } else {
          alert("사용가능한 닉네임입니다.");
          // nicknameChecked = true
        }
      })
      .catch((error) => {
        alert("닉네임 중복확인 중 오류 발생");
      });
  }

  function checkPasswordChar(e) {
    const regex =
      /^(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+~`|}{[\]\\:';"<>,./?-]{10,}$/;
    const isValid = regex.test(e.target.value);
    if (isValid) {
      document.querySelector("#passwordHelpBlock").innerText = "";
    } else {
      document.querySelector("#passwordHelpBlock").innerText =
        "비밀번호는 영어, 숫자를 포함해 총 10글자 이상이어야 합니다.";
    }
  }

  function checkBothPasswordSame(e) {
    const password = document.getElementsByName("password")[0].value;
    const passwordConfirm = e.target.value;

    if (password === passwordConfirm) {
      document.querySelector("#passwordConfirmHelpBlock").innerText = "";
    } else {
      document.querySelector("#passwordConfirmHelpBlock").innerText =
        "비밀번호가 일치하지 않습니다.";
    }
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios
      .post("http://localhost:8080/auth/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data.status === "success") {
          alert("가입이 완료 되었습니다");
          handleClose();
          window.location.href = "./";
        } else {
          alert("가입 양식이 맞지 않습니다");
        }
      })
      .catch((error) => {
        alert("회원가입 중 오류 발생");
      });
  }

  return (
    <>
      <p id="signup-btn" onClick={handleShow}>
        Sign up
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ width: "100%", height: "100%", backgroundColor: "#00000000" }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">회원가입</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSignupSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-dark">이메일</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                />
                <Button
                  variant="outline-secondary"
                  id="checkEmailBtn"
                  onClick={checkEmail}
                >
                  중복확인
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="nickname">
              <Form.Label className="text-dark">닉네임</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  name="nickname"
                  placeholder="nickname"
                />
                <Button
                  variant="outline-secondary"
                  id="checkNicknameBtn"
                  onClick={checkNickname}
                >
                  중복확인
                </Button>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-dark">비밀번호</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={checkPasswordChar}
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password2">
              <Form.Label className="text-dark">비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                onChange={checkBothPasswordSame}
              />
              <Form.Text id="passwordConfirmHelpBlock" muted></Form.Text>
            </Form.Group>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
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

  function handleLoginSubmit(e) {
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
          getCurrentUser(setCurrentUser);
          handleClose();
        } else {
          alert("이메일 또는 비밀번호가 틀렸습니다.");
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
          <Form onSubmit={handleLoginSubmit}>
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
