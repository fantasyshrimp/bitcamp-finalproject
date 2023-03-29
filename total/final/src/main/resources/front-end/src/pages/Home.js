import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container fluid>
      <Row className="bg-dark" style={{ height: "300px" }}></Row>
      <Row className="bg-dark" style={{ height: "400px" }}>
        <Col xl={2}></Col>
        <Col xl={4} className="text-light">
          <div style={{ fontSize: "150px" }}>{hello}</div>
          <div>
            <a
              className="border text-light p-1"
              style={{ textDecoration: "none" }}
              href="#"
            >
              Try Artify
            </a>
          </div>
        </Col>
        <Col xl={6}></Col>
      </Row>
    </Container>
  );
}

export default Home;
