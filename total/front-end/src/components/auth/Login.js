import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function Login(props) {
  const [show, setShow] = useState(false);
  let { currentUser, setCurrentUser } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClickLogin = (e) => {
    const email = document.getElementsByName("email")[0].value;
    if (!email.includes("@") || !email.includes(".")) {
      document.querySelector("#emailHelpBlock").innerText =
        "이메일 양식이 맞지 않습니다.";
      return;
    } else {
      document.querySelector("#emailHelpBlock").innerText = "";
    }

    const password = document.getElementsByName("password")[0].value;
    if (password.length === 0) {
      document.querySelector("#passwordHelpBlock").innerText =
        "비밀번호를 입력하세요";
      document.getElementsByName("password")[0].focus();
      return;
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
          alert("이메일 또는 비밀번호가 틀렸습니다.");
        }
      })
      .catch((error) => {
        alert("로그인 중 오류 발생");
      });
  };

  const handleChangePassword = () => {
    document.querySelector("#passwordHelpBlock").innerText = "";
  };

  return (
    <>
      <div onClick={handleShow}>Login</div>

      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ width: "100%", height: "100%", backgroundColor: "#00000000" }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">반갑습니다!</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-dark">
                사용자의 이메일 주소를 입력해주세요
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                autoFocus
              />
              <Form.Text id="emailHelpBlock" muted></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="text-dark">
                사용자의 비밀번호를 입력해주세요
              </Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChangePassword}
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClickLogin}>
              Log In
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default Login;
