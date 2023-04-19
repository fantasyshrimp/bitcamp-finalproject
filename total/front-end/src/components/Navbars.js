import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Navbar, Nav, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Post, Searchs, DarkModeSwitch } from "./";
import { AuthBtn } from "./auth";
import SSEContext from "../handler/SSEContext";
axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function Navbars(props) {
  const { message, setMessage } = useContext(SSEContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8080/auth/user");
        if (result.data.status == "success") {
          props.setCurrentUser(result.data.data);
        } else {
          props.setCurrentUser(null);
        }
      } catch (error) {
        alert("현재 서버가 꺼져 있어 로그인 유저 정보를 가져올 수 없습니다.");
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        style={{ backgroundColor: `var(--aim-base-tone)` }}
      >
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: `var(--aim-text-default)` }}>
            Artify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/feed/" style={{ color: `var(--aim-text-sub)` }}>
                Feed
              </Nav.Link>
              <Nav.Link href="/faq/" style={{ color: `var(--aim-text-sub)` }}>
                FAQ
              </Nav.Link>
              <Searchs />
              <div className="text-light"></div>
            </Nav>

            <Nav>
              <div className="d-flex ms-2 me-2 justify-content-center align-items-center">
                {message || props.currentUser?.isGenerating === 1 ? (
                  (() => {
                    let variant, label, status;

                    status = message
                      ? message.status
                      : props.currentUser?.isGenerating === 1
                      ? "process"
                      : "";

                    switch (status) {
                      case "success":
                        variant = "success";
                        label = "생성 완료";
                        break;
                      case "failure":
                        variant = "danger";
                        label = "에러 발생";
                        break;
                      case "process":
                        variant = "info";
                        label = "생성 중";
                        break;
                      default:
                        variant = "info";
                        label = "생성 중";
                    }

                    return (
                      <ProgressBar
                        variant={variant}
                        now={100}
                        label={label}
                        animated={
                          message?.status === "process" ||
                          props.currentUser?.isGenerating === 1
                        }
                        style={{
                          width: "70px",
                          height: "20px",
                          fontSize: "0.75rem",
                        }}
                      />
                    );
                  })()
                ) : (
                  <div></div>
                )}
              </div>

              <DarkModeSwitch />
              <AuthBtn
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
                loginShow={props.loginShow}
                setLoginShow={props.setLoginShow}
                signupShow={props.signupShow}
                setSignupShow={props.setSignupShow}
                isLoginModal={props.isLoginModal}
                setIsLoginModal={props.setIsLoginModal}
                showExternalLogin={props.showExternalLogin}
                setShowExternalLogin={props.setShowExternalLogin}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
