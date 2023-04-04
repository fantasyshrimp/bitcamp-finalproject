import React, { useState, useEffect } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function PostModal(props) {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUser !== null) {
      handleClovaSummary();
    }
  }, [currentUser]);

  const HandleClickGenerate = () => {
    axios("http://localhost:8080/auth/user")
      .then((response) => {
        if (response.data.status == "success") {
          setCurrentUser(response.data.data);
        } else {
          setCurrentUser(null);
          alert("로그인 후 이용하세요");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        alert("로그인 유저 가져오는 중 오류 발생!");
      });
  };

  const handleClovaSummary = () => {
    console.log(currentUser);
    const writerNo = currentUser.no;
    const originContent = document.querySelector("#post-text").value;

    axios
      .post(
        "http://localhost:8080/api/boards",
        {},
        {
          params: {
            writerNo: writerNo,
            originContent: originContent,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          console.log(response);
        } else {
          alert("이상 발생!");
        }
      })
      .catch((error) => {
        alert("글쓰기 중 오류 발생");
      });
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        style={{ width: "100%", height: "100%", backgroundColor: "#00000000" }}
        contentClassName="bg-dark"
      >
        <Modal.Header
          closeButton
          closeVariant="white"
          style={{ borderBottom: "none" }}
        ></Modal.Header>
        <Modal.Header
          style={{ borderBottom: "none" }}
          className="d-flex justify-content-center p-0"
        >
          <Modal.Title className="text-light">Post</Modal.Title>
        </Modal.Header>

        <Modal.Body className="pt-0 pb-0">
          <Form>
            <Form.Group>
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                id="post-text"
                rows={12}
                placeholder="당신의 이야기를 그림으로 만들어 드려요!"
                style={{ resize: "none" }}
                className="bg-dark text-light"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{ borderTop: "none" }}
          className="d-flex justify-content-center"
        >
          <Button
            variant="primary"
            type="button"
            onClick={HandleClickGenerate}
            style={{ width: "160px" }}
          >
            Generate
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;
