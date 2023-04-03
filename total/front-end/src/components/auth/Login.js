import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function Login(props) {
  const [show, setShow] = useState(false);
  let { currentUser, setCurrentUser } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClickLogin() {
    const email = document.getElementsByName("email")[0].value;
    const password = document.getElementsByName("password")[0].value;

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
  }

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

        <Modal.Body>
          <Form>
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
            <Button variant="primary" type="button" onClick={handleClickLogin}>
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
