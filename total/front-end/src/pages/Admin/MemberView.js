import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./MemberView.module.css";
import axios from "axios";

function MemberView(props) {
  const { show, setShow, no } = props;
  const handleClose = () => setShow(false);
  const [data, setData] = useState({});
  console.log(no);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/admin/` + no);
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [no, setShow]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MemberView Modal Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>회원번호</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="no"
                  value={data ? data.no : ""}
                  autoFocus
                  readOnly
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>닉네임</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="nickname"
                  value={data ? data.nickname : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>이메일</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={data ? data.email : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>비밀번호</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="password"
                  value={data ? data.password : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>가입일</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="createdDate"
                  value={data ? data.createdDate : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>성별</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="gender"
                  value={
                    data
                      ? data.gender === 1
                        ? "남"
                        : data.gender === 2
                        ? "여"
                        : "미정"
                      : ""
                  }
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>프로필사진명</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="profilePhoto"
                  value={data ? data.profilePhoto : ""}
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
                  value={data ? data.basicAddress : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>포인트</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="point"
                  value={data ? data.point : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>자기소개글</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="information"
                  value={data ? data.information : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>생년월일</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="birthDate"
                  value={data ? data.birthDate : ""}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>전화번호</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="tel"
                  value={data ? data.tel : ""}
                  autoFocus
                />
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
                  value={data ? data.passwordDate : ""}
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
                  value={
                    data
                      ? data.accountState === 0
                        ? "이메일 인증"
                        : data.accountState === 1
                        ? "이메일 미인증"
                        : data.accountState === 2
                        ? "휴면계정"
                        : data.accountState === 3
                        ? "탈퇴"
                        : "정지"
                      : ""
                  }
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.label}>권한레벨</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="authLevel"
                  value={data ? (data.authLevel === 9 ? "관리자" : "일반") : ""}
                  autoFocus
                />
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
