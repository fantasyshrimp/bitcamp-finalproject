import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import { Post, Searchs } from "./";
import { AuthBtn } from "./auth";
axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function Navbars() {
  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8080/auth/user");
        if (result.data.status == "success") {
          setCurrentUser(result.data.data);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        alert("로그인 유저 가져오는 중 오류 발생!");
      }
    };

    fetchData();
  }, []);

  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Artify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Feed/">Feed</Nav.Link>
            <Nav.Link href="/Profile/">pppp</Nav.Link>
          </Nav>

          <Nav>
            <Searchs />
          </Nav>

          <Nav>
            <AuthBtn
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
