import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./AuthModal.css";
import {
  Pencil,
  Person,
  Gear,
  BoxArrowRight,
  ShieldLock,
  GraphUp,
} from "react-bootstrap-icons";
import PostModal from "../PostModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
axios.defaults.withCredentials = true;

function AuthModal(props) {
  const { show, setShow } = props;
  let { currentUser, setCurrentUser } = props;
  const [postShow, setPostShow] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);

  const handleClickPostModal = (e) => {
    e.preventDefault();
    setPostShow(true);
    setShow(false);
  };

  const handleClickLogout = (e) => {
    e.preventDefault();
    handleClose();

    axios
      .get("http://localhost:8080/auth/logout")
      .then((response) => {
        setCurrentUser(null);
        window.location.href = "http://localhost:3000";
      })
      .catch((error) => {
        // alert("로그아웃 중 오류 발생!");
        Swal.fire({
          title:
            "로그아웃을 시도하는 중 오류가 발생 했습니다. 잠시 후 다시 시도해 주세요.",
          confirmButtonText: "확인",
        });
      });
  };

  const handleClickAdminPage = () => {
    handleClose();
  };

  const handleClickStats = () => {
    handleClose();
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
        dialogClassName={
          currentUser && currentUser.authLevel === 9
            ? "auth-modal-dialog auth-modal-dialog-wide"
            : "auth-modal-dialog"
        }
        id="auth-modal"
      >
        <Modal.Body>
          {currentUser && currentUser.authLevel === 9 && (
            <div>
              <div className="mb-3">
                <a
                  href="/admin/management"
                  className="auth-modal-link"
                  onClick={handleClickAdminPage}
                >
                  <ShieldLock
                    style={{
                      fontSize: `var(--aim-nomal-font-size)`,
                      position: "relative",
                      bottom: "2px",
                    }}
                  />
                  <span className="ms-3">관리 페이지</span>
                </a>
              </div>
              <div className="mb-3">
                <a
                  href="/admin/stats"
                  className="auth-modal-link"
                  onClick={handleClickStats}
                >
                  <GraphUp
                    style={{
                      fontSize: `var(--aim-nomal-font-size)`,
                      position: "relative",
                      bottom: "2px",
                    }}
                  />
                  <span className="ms-3">통계 페이지</span>
                </a>
              </div>
            </div>
          )}
          <div className="mb-3">
            <a
              href={props.currentUser?.isGenerating === 0 ? "" : "#"}
              className={`auth-modal-link ${
                props.currentUser?.isGenerating && "auth-generating"
              }`}
              onClick={
                props.currentUser?.isGenerating === 0
                  ? handleClickPostModal
                  : undefined
              }
            >
              <Pencil
                style={{
                  fontSize: `var(--aim-nomal-font-size)`,
                  position: "relative",
                  bottom: "2px",
                }}
              />
              <span className="ms-3">글쓰기</span>
            </a>
          </div>
          <div className="mb-3">
            <a
              href="/"
              className="auth-modal-link"
              onClick={(e) => {
                e.preventDefault();
                axios
                  .get("http://localhost:8080/auth/user")
                  .then((response) => {
                    navigate("/Profile", {
                      state: { no: response.data.data.no },
                    });
                    handleClose();
                  });
              }}
            >
              <Person
                style={{
                  fontSize: `var(--aim-nomal-font-size)`,
                  position: "relative",
                  bottom: "2px",
                }}
              />
              <span className="ms-3">내 프로필</span>
            </a>
          </div>
          <div className="mb-3">
            <a
              href="/personalSetting"
              className="auth-modal-link"
              onClick={handleClose}
            >
              <Gear
                style={{
                  fontSize: `var(--aim-nomal-font-size)`,
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
                  fontSize: `var(--aim-nomal-font-size)`,
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

      <PostModal
        show={postShow}
        setShow={setPostShow}
        currentUser={props.currentUser}
        setCurrentUser={props.setCurrentUser}
      />
    </>
  );
}

export default AuthModal;
