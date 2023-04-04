import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import authBtnStyle from "./ButtonStyle";
import axios from "axios";
axios.defaults.withCredentials = true;

function Login(props) {
  const [show, setShow] = useState(false);
  let { currentUser, setCurrentUser } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

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
        console.log(response);
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

  return (
    <>
      <div onClick={handleShow}>Login</div>

      <Modal
        show={show}
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
                placeholder="name@example.com"
                className="bg-dark text-light"
                autoFocus
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
              type="submit"
              onClick={handleClickLogin}
              style={authBtnStyle}
              disabled={isDisabled()}
            >
              Log In
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Login;
