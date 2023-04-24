import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Navbar, Nav, ProgressBar } from "react-bootstrap";
import axios from "axios";
import { Post, Searchs, DarkModeSwitch } from "./";
import { AuthBtn } from "./auth";
import SSEContext from "../handler/SSEContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FeedModal from "../pages/Feed/FeedModal";
axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function Navbars(props) {
  const sseMessage = useContext(SSEContext);
  const [message, setMessage] = useState(null);
  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const feedModalData = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8080/auth/user");
        if (result.data.status == "success") {
          props.setCurrentUser(result.data.data);
          setUser({ data: props.currentUser });
        } else {
          props.setCurrentUser(null);
        }
      } catch (error) {
        // alert("현재 서버가 꺼져 있어 로그인 유저 정보를 가져올 수 없습니다.");
        Swal.fire({
          title:
            "서버 문제로 유저 정보를 가져올 수 없습니다. 잠시 후 다시 시도해 주세요.",
          confirmButtonText: "확인",
        });
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setMessage(sseMessage);
  }, [sseMessage]);

  const handleClickProcessBar = (variant) => {
    if (variant === "success") {
      const board = JSON.parse(message.boardJson);
      openFeedModal(board);
    }
  };

  const openFeedModal = (data) => {
    navigate("/feed");
    feedModalData.current = data;
    setIsFeedModalOpen(true);
    console.log(user);
  };

  const closeFeedModal = () => {
    setIsFeedModalOpen(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg={props.isLightMode ? "light" : "dark"}
        variant={props.isLightMode ? "light" : "dark"}
        className="bg-gradient"
      >
        <Container fluid>
          <Navbar.Brand href="/" style={{ color: `var(--aim-text-default)` }}>
            Artify
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/feed/">Feed</Nav.Link>
              <Nav.Link href="/faq/">FAQ</Nav.Link>
              <Searchs
                isLightMode={props.isLightMode}
                setIsLightMode={props.setIsLightMode}
              />
              <div className="text-light"></div>
            </Nav>

            <Nav>
              <div className="d-flex ms-2 me-2 justify-content-center align-items-center">
                {message || props.currentUser?.isGenerating === 1 ? (
                  (() => {
                    let variant, label, animated, status;

                    status = message
                      ? message.status
                      : props.currentUser?.isGenerating === 1
                      ? "process"
                      : "";

                    switch (status) {
                      case "success":
                        variant = "success";
                        label = "생성 완료";
                        animated = false;
                        break;
                      case "failure":
                        variant = "danger";
                        label = "에러 발생";
                        animated = false;
                        break;
                      case "process":
                      default:
                        variant = "info";
                        label = `생성 중 ${message?.count || " "}s`;
                        animated = true;
                    }

                    return (
                      <ProgressBar
                        variant={variant}
                        now={100}
                        label={label}
                        animated={animated}
                        style={{
                          width: "80px",
                          height: "20px",
                          fontSize: "0.75rem",
                          borderRadius: "4px",
                        }}
                        onClick={() => handleClickProcessBar(variant)}
                      />
                    );
                  })()
                ) : (
                  <div></div>
                )}
              </div>

              <DarkModeSwitch
                isLightMode={props.isLightMode}
                setIsLightMode={props.setIsLightMode}
              />
              <AuthBtn
                currentUser={props.currentUser}
                setCurrentUser={props.setCurrentUser}
                loginShow={props.loginShow}
                setLoginShow={props.setLoginShow}
                signupShow={props.signupShow}
                setSignupShow={props.setSignupShow}
                searchPwShow={props.searchPwShow}
                setSearchPwShow={props.setSearchPwShow}
                isLoginModal={props.isLoginModal}
                setIsLoginModal={props.setIsLoginModal}
                showExternalLogin={props.showExternalLogin}
                setShowExternalLogin={props.setShowExternalLogin}
                message={message}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isFeedModalOpen && (
        <div>
          <div
            id="modal-background"
            onClick={() => {
              closeFeedModal();
            }}
          ></div>
          <div
            id="feed-modal"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <div
              id="feed-close"
              onClick={() => {
                closeFeedModal();
              }}
              className={`btn-close btn-close-${
                localStorage.getItem("isLightMode") === "true"
                  ? "dark"
                  : "white"
              }`}
            ></div>
            {console.log(feedModalData.current)}
            <FeedModal
              key={feedModalData.current}
              data={feedModalData.current}
              closeModal={closeFeedModal}
              // user={user}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbars;
