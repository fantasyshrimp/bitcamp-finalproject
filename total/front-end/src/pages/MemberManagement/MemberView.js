import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // ReactDOM import 추가
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./MemberView.module.css";

function MemberView() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/member")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  function handleColumnSelect(selectedColumn) {
    console.log(`Selected column: ${selectedColumn}`);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        MemberView Button
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MemberView Modal Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>회원번호</Form.Label>
                <Form.Control type="text" placeholder="no" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>닉네임</Form.Label>
                <Form.Control type="text" placeholder="nickname" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>이메일</Form.Label>
                <Form.Control type="email" placeholder="email" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>비밀번호</Form.Label>
                <Form.Control type="text" placeholder="password" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>가입일</Form.Label>
                <Form.Control type="text" placeholder="createdDate" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>성별</Form.Label>
                <Form.Control type="text" placeholder="gender" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>프로필사진명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="profilePhoto"
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>기본주소</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="basicAddress"
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>포인트</Form.Label>
                <Form.Control type="text" placeholder="point" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>자기소개글</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="information"
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>생년월일</Form.Label>
                <Form.Control type="email" placeholder="birthDate" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>전화번호</Form.Label>
                <Form.Control type="email" placeholder="tel" autoFocus />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>
                  비밀번호변경일시
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="passwordDate"
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>계정상태</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="accountState"
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>권한레벨</Form.Label>
                <Form.Control type="email" placeholder="authLevel" autoFocus />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MemberView;

/*

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>이메일</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  autoFocus
                />
              </div>
            </Form.Group>

*/