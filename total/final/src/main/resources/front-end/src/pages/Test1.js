import "./Test1.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Test1() {

  const [hello, setHello] = useState("");
  
  useEffect(() => {
    console.log("hhh");
    axios
      .get("http://localhost:8080/api/" + 1)
      .then(function(response) {setHello(response.data);
      console.log(response.json);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("hhh");
  return (
    <Container>
      <Row>
        <Col><div><span>{hello.email}</span></div></Col>
        <Col><div>2 of 6</div></Col>
        <Col><div>3 of 6</div></Col>
        <Col><div>4 of 6</div></Col>
        <Col><div>5 of 6</div></Col>
        <Col><div>6 of 6</div></Col>
      </Row>
      <Row>
        <Col><div>1 of 6</div></Col>
        <Col><div>2 of 6</div></Col>
        <Col><div>3 of 6</div></Col>
        <Col><div>4 of 6</div></Col>
        <Col><div>5 of 6</div></Col>
        <Col><div>6 of 6</div></Col>
      </Row>
    </Container>
  );
}

export default Test1;