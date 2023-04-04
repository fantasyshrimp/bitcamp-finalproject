import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import authBtnStyle from "./ButtonStyle";
import axios from "axios";
axios.defaults.withCredentials = true;

function SignupBtn(props) {
  const [show, setShow] = useState(false);
  let { currentUser, setCurrentUser } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validEmail, setValidEmail] = useState(false);
  const [validNickname, setValidNickname] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  function checkEmail() {
    const email = document.getElementsByName("email")[0].value;
    if (!email.includes("@")) {
      document.querySelector("#emailHelpBlock").innerText =
        "이메일 형식이 올바르지 않습니다.";
      setValidEmail(false);
      return;
    }

    axios
      .get("http://localhost:8080/auth/checkemail", {
        params: { email: email },
      })
      .then((response) => {
        if (response.data.status === "success") {
          document.querySelector("#emailHelpBlock").innerText =
            "이미 가입된 이메일입니다.";
          setValidEmail(false);
        } else {
          document.querySelector("#emailHelpBlock").innerText = "";
          //   "사용가능한 이메일입니다.";
          setValidEmail(true);
        }
      })
      .catch((error) => {
        alert("이메일 중복확인 중 오류 발생");
      });
  }

  function blueEmail() {
    if (validEmail) {
      document.querySelector("#emailHelpBlock").innerText = "";
    }
  }

  function checkNickname() {
    const nickname = document.getElementsByName("nickname")[0].value;

    axios
      .get("http://localhost:8080/auth/checknickname", {
        params: { nickname: nickname },
      })
      .then((response) => {
        if (response.data.status === "success") {
          document.querySelector("#nicknameHelpBlock").innerText =
            "이미 사용중인 닉네임입니다.";
          setValidNickname(false);
        } else {
          document.querySelector("#nicknameHelpBlock").innerText = "";
          // "사용가능한 닉네임입니다.";
          setValidNickname(true);
        }
      })
      .catch((error) => {
        alert("닉네임 중복확인 중 오류 발생");
      });
  }

  function blueNickname() {
    if (validNickname) {
      document.querySelector("#nicknameHelpBlock").innerText = "";
    }
  }

  function checkPasswordChar(e) {
    const regex =
      /^(?=.*[a-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+~`|}{[\]\\:';"<>,./?-]{10,}$/;
    const isValid = regex.test(e.target.value);
    if (isValid) {
      document.querySelector("#passwordHelpBlock").innerText = "";
      setValidPassword(true);
    } else {
      document.querySelector("#passwordHelpBlock").innerText =
        "비밀번호는 영어, 숫자를 포함해 총 10글자 이상이어야 합니다.";
      setValidPassword(false);
    }
  }

  function checkBothPasswordSame(e) {
    const password = document.getElementsByName("password")[0].value;
    const passwordConfirm = e.target.value;

    if (password === passwordConfirm) {
      document.querySelector("#passwordConfirmHelpBlock").innerText = "";
      setValidConfirmPassword(true);
    } else {
      document.querySelector("#passwordConfirmHelpBlock").innerText =
        "비밀번호가 일치하지 않습니다.";
      setValidConfirmPassword(false);
    }
  }

  function handleSignupSubmit(e) {
    const email = document.getElementsByName("email")[0].value;
    const nickname = document.getElementsByName("nickname")[0].value;
    const password = document.getElementsByName("password")[0].value;

    axios
      .post(
        "http://localhost:8080/auth/signup",
        {},
        {
          params: {
            email: email,
            nickname: nickname,
            password: password,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          alert("가입이 완료 되었습니다");
          handleClose();
          window.location.reload();
        } else {
          alert("가입 양식이 맞지 않습니다");
        }
      })
      .catch((error) => {
        alert("회원가입 중 오류 발생");
      });
  }

  const isDisabled = () => {
    return !(
      validEmail &&
      validNickname &&
      validPassword &&
      validConfirmPassword
    );
  };

  return (
    <>
      <div onClick={handleShow}>Sign up</div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ width: "100%", height: "100%", backgroundColor: "#00000000" }}
        contentClassName="bg-dark"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{ borderBottom: "none" }}
        ></Modal.Header>
        <Modal.Header
          style={{ borderBottom: "none" }}
          className="d-flex justify-content-center p-0 pt-2 pb-2"
        >
          <Modal.Title className="text-light">회원가입</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body className="p-5 pb-4 pt-4">
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-light">이메일</Form.Label>
              <InputGroup>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="bg-dark text-light"
                  onChange={checkEmail}
                  onBlur={blueEmail}
                />
              </InputGroup>
              <Form.Text id="emailHelpBlock"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="nickname">
              <Form.Label className="text-light">닉네임</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="nickname"
                  placeholder="nickname"
                  className="bg-dark text-light"
                  onChange={checkNickname}
                  onBlur={blueNickname}
                />
              </InputGroup>
              <Form.Text id="nicknameHelpBlock"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-light">비밀번호</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={checkPasswordChar}
                className="bg-dark text-light"
              />
              <Form.Text id="passwordHelpBlock"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password2">
              <Form.Label className="text-light">비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                onChange={checkBothPasswordSame}
                className="bg-dark text-light"
              />
              <Form.Text id="passwordConfirmHelpBlock"></Form.Text>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer
            style={{ borderTop: "none" }}
            className="d-flex justify-content-center pb-5 ps-5 pe-5"
          >
            <Button
              variant="primary"
              type="button"
              onClick={handleSignupSubmit}
              style={authBtnStyle}
              disabled={isDisabled()}
            >
              Sign Up
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SignupBtn;
