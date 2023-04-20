import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function SearchPwModal(props) {
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const emailRef = useRef(null);

  const handleClose = () => {
    props.setSearchPwShow(false);
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
        if (response.data.status === "success") {
          if (response.data.data.accountState === 1) {
            alert("메일 인증 후 로그인 하세요.");
            return;
          }
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

  useEffect(() => {
    // 모달 열렸을 때 오토포커스 주기
    if (props.searchPwShow) {
      const emailInput = document.getElementsByName("email")[0];
      if (emailInput) {
        emailRef.current.focus();
      }
    }
  }, [props.searchPwShow]);

  return (
    <>
      <Modal
        show={props.searchPwShow}
        onHide={handleClose}
        centered
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: `var(--aim-base-alpa)`,
          border: "none",
        }}
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{ borderBottom: "none" }}
        ></Modal.Header>
        <Modal.Header
          style={{ borderBottom: "none", borderRadius: "0" }}
          className="d-flex justify-content-center p-0 pt-2 pb-2"
        >
          <Modal.Title className="text-light">비밀번호 찾기</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body
            className="p-5 pb-4 pt-4"
            style={{ backgroundColor: `var(--aim-base-tone)` }}
          >
            <Form.Group className="mb-4" controlId="email">
              <Form.Label className="text-light">
                이메일 주소로 인증번호를 보내 드립니다.
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@naver.com"
                onKeyDown={handleEnter}
                ref={emailRef}
                // autoComplete="username"
                style={{
                  color: `var(--aim-text-default)`,
                  backgroundColor: `var(--aim-base-tone)`,
                }}
              />
              <Form.Text id="emailHelpBlock"></Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer
            style={{ borderTop: "none" }}
            className="d-flex flex-column justify-content-center pt-2 pb-4 ps-5 pe-5"
          >
            <Button variant="primary" type="button" className="mb-4">
              인증번호 받기
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SearchPwModal;
