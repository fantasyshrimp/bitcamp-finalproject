import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./AuthModal.css";
import { Pencil, Person, Gear, BoxArrowRight } from "react-bootstrap-icons";
import PostModal from "../PostModal";
import axios from "axios";
axios.defaults.withCredentials = true;

function AuthModal(props) {
  const { show, setShow } = props;
  let { currentUser, setCurrentUser } = props;
  const [postShow, setPostShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleClickPostModal = (e) => {
    e.preventDefault();
    setPostShow(true);
    setShow(false);
  };

  const handleClickLogout = () => {
    handleClose();

    axios
      .get("http://localhost:8080/auth/logout")
      .then((response) => {
        setCurrentUser(null);
        window.location.reload();
      })
      .catch((error) => {
        alert("로그아웃 중 오류 발생!");
      });
  };

  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        animation={false}
        aria-labelledby="auth-modal-sizes-title-sm"
        backdropClassName="auth-modal-backdrop"
        dialogClassName="auth-modal-dialog"
      >
        <Modal.Body>
          <div className="mb-2">
            <a
              href=""
              className="auth-modal-link"
              onClick={handleClickPostModal}
            >
              <Pencil
                style={{
                  fontSize: "1.3rem",
                  position: "relative",
                  bottom: "2px",
                }}
              />
              <span className="ms-3">글쓰기</span>
            </a>
          </div>
          <div className="mb-2">
            <a
              href="/profile"
              className="auth-modal-link"
              onClick={handleClose}
            >
              <Person
                style={{
                  fontSize: "1.4rem",
                  position: "relative",
                  bottom: "2px",
                }}
              />
              <span className="ms-3">내 프로필</span>
            </a>
          </div>
          <div className="mb-2">
            <a
              href="/settings"
              className="auth-modal-link"
              onClick={handleClose}
            >
              <Gear
                style={{
                  fontSize: "1.4rem",
                  position: "relative",
                  bottom: "1px",
                }}
              />
              <span className="ms-3">설정</span>
            </a>
          </div>
          <div className="mb-0">
            <a href="/" className="auth-modal-link" onClick={handleClickLogout}>
              <BoxArrowRight
                style={{
                  fontSize: "1.4rem",
                  position: "relative",
                  left: "3px",
                  bottom: "3px",
                }}
              />
              <span className="ms-3">로그아웃</span>
            </a>
          </div>
        </Modal.Body>
      </Modal>

      <PostModal show={postShow} setShow={setPostShow} />
    </>
  );
}

export default AuthModal;
