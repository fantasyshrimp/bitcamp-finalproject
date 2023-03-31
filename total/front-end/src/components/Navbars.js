import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import axios from "axios";
import { Post, Searchs } from "./";
import { AuthBtn } from "./auth";
import getCurrentUser from "./getCurrentUser";
axios.defaults.withCredentials = true; // SpringBoot + axios 사용 관련 AuthController 에서 HttpSession 동일 객체 사용을 위한 설정

function Navbars() {
  let [currentUser, setCurrentUser] = useState("");
  getCurrentUser(setCurrentUser);

  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Artify</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Feed/">Feed</Nav.Link>
            <Nav.Link href="/profile/">profile</Nav.Link>
            <Nav.Link>
              <Post />
            </Nav.Link>
          </Nav>
          <Nav>
            <Searchs />
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
