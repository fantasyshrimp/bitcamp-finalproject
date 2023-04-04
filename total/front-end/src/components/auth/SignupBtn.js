import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function SignupBtn(props) {
  const [show, setShow] = useState(false);
  let { currentUser, setCurrentUser } = props;

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
        >
          <Modal.Title className="text-light">회원가입</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="text-light">이메일</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="bg-dark text-light"
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
              <Form.Label className="text-light">닉네임</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  type="text"
                  name="nickname"
                  placeholder="nickname"
                  className="bg-dark text-light"
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
              <Form.Label className="text-light">비밀번호</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={checkPasswordChar}
                className="bg-dark text-light"
              />
              <Form.Text id="passwordHelpBlock" muted></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password2">
              <Form.Label className="text-light">비밀번호 확인</Form.Label>
              <Form.Control
                type="password"
                name="passwordConfirm"
                onChange={checkBothPasswordSame}
                className="bg-dark text-light"
              />
              <Form.Text id="passwordConfirmHelpBlock" muted></Form.Text>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer style={{ borderTop: "none" }} className="d-grid gap-1">
            <Button
              variant="primary"
              type="button"
              onClick={handleSignupSubmit}
              style={{
                backgroundColor: "var(--color2)",
                borderColor: "var(--color2)",
              }}
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
