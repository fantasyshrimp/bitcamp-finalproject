import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, Form } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav navbar-expand-lg">
      <div className="container-fluid">
        <div className="row bg-secondary align-items-center">
          <div className="col-2">
            <a className="nav-link text-light" href="/">
              Artify
            </a>
          </div>
          <div className="col">
            <a className="nav-link text-light" href="/feed">
              Feed
            </a>
          </div>
          <div className="col">
            <a className="nav-link text-light" href="/profile">
              Profile
            </a>
          </div>
          <div className="col-6"></div>
          <div className="col"></div>
          <div className="col">
            <div>
              <LoginModal1 className="nav-link text-light text-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginModal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a className="nav-link text-light text-end" onClick={handleShow}>
        Log In
      </a>
      {show && (
        <div className="modal fade">
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ width: "450px" }}
          >
            <div className="modal-content bg-dark ps-5 pe-5">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 text-center text-light"
                  id="exampleModalToggleLabel"
                >
                  반갑습니다!
                </h1>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <div></div>
              </div>
              <div
                className="modal-body text-light"
                style={{ height: "250px" }}
              >
                <form>
                  <div className="">
                    <label htmlFor="user-email" className="col-form-label mt-4">
                      사용자의 이메일 주소를 입력해주세요.
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-light mb-2"
                      id="user-email"
                      placeholder="이메일 주소"
                    />
                    <a href="#" className="text-white-50">
                      이메일 주소를 잊으셨나요?
                    </a>
                  </div>
                </form>
              </div>
              <div className="modal-footer justify-content-between mb-1">
                <button
                  className="btn btn-primary"
                  data-bs-target="#"
                  data-bs-toggle="modal"
                >
                  신규가입
                </button>
                <button
                  className="btn btn-primary"
                  id="login-next"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  다음
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
