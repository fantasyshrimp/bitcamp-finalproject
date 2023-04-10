import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import authBtnStyle from "./style";
import axios from "axios";
axios.defaults.withCredentials = true;

function LoginModal(props) {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const handleClose = () => {
    props.handleShow(); // AuthBtn.js 에서 상태 관리
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleClickLogin();
    }
  };

  const handleClickLogin = (e) => {
    const email = document.getElementsByName("email")[0].value;
    if (!email.includes("@")) {
      document.querySelector("#emailHelpBlock").innerText =
        "이메일 형식이 올바르지 않습니다.";
      setValidEmail(false);
      return;
    } else {
      document.querySelector("#emailHelpBlock").innerText = "";
      setValidEmail(true);
    }

    const password = document.getElementsByName("password")[0].value;
    if (password.length === 0) {
      document.querySelector("#passwordHelpBlock").innerText =
        "비밀번호를 입력하세요";
      setValidPassword(false);
      document.getElementsByName("password")[0].focus();
      return;
    }
    if (password.length === 10) {
      setValidPassword(true);
    } else {
      document.querySelector("#passwordHelpBlock").innerText = "";
    }

    axios
      .post(
        "http://localhost:8080/auth/login",
        {},
        {
          params: {
            email: email,
            password: password,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        if (response.data.status === "success") {
          handleClose();
          window.location.reload();
        } else {
          document.querySelector("#passwordHelpBlock").innerText =
            "이메일 또는 비밀번호가 틀렸습니다.";
        }
      })
      .catch((error) => {
        alert("로그인 중 오류 발생");
      });
  };

  const checkEmail = () => {
    const email = document.getElementsByName("email")[0].value;
    document.querySelector("#passwordHelpBlock").innerText = "";

    if (!email.includes("@")) {
      setValidEmail(false);
      return;
    } else {
      setValidEmail(true);
    }
  };

  const handleChangePassword = () => {
    if (document.getElementsByName("password")[0].value.length > 0) {
      document.querySelector("#passwordHelpBlock").innerText = "";
      setValidPassword(true);
    } else {
      document.querySelector("#passwordHelpBlock").innerText =
        "비밀번호를 입력하세요";
      setValidPassword(false);
    }
  };

  const isDisabled = () => {
    return !(validEmail && validPassword);
  };

  useEffect(() => {
    // 모달 열렸을 때 오토포커스 주기
    if (props.loginShow) {
      const emailInput = document.getElementsByName("email")[0];
      if (emailInput) {
        emailInput.focus();
      }
    }
  }, [props.loginShow]);

  const handleClickSignup = () => {
    handleClose();
    props.setSignupShow(true); // AuthBtn.js 에서 상태 관리
  };

  return (
    <>
      <Modal
        show={props.loginShow}
        onHide={handleClose}
        centered
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#00000000",
          border: "none",
        }}
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
          <Modal.Title className="text-light">반갑습니다!</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body className="p-5 pb-4 pt-4">
            <Form.Group className="mb-4" controlId="email">
              <Form.Label className="text-light">
                사용자의 이메일 주소를 입력해주세요
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@naver.com"
                className="bg-dark text-light"
                onChange={checkEmail}
              />
              <Form.Text id="emailHelpBlock"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-light">
                사용자의 비밀번호를 입력해주세요
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                className="bg-dark text-light"
                onChange={handleChangePassword}
                onKeyDown={handleEnter}
              />
              <Form.Text id="passwordHelpBlock"></Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer
            style={{ borderTop: "none" }}
            className="d-flex justify-content-center pb-5 ps-5 pe-5"
          >
            <Button
              variant="primary"
              type="button"
              onClick={handleClickLogin}
              style={authBtnStyle}
              disabled={isDisabled()}
              className="mb-2"
            >
              Log In
            </Button>
            <div className="text-light">
              <span>아직 계정이 없으신가요? </span>
              <span className="login-modal-signup" onClick={handleClickSignup}>
                회원가입
              </span>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default LoginModal;
