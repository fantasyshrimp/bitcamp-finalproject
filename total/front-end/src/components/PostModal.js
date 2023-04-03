import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;

function PostModal(props) {
  const { show, setShow } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePostSubmit = () => {};

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        style={{ width: "100%", height: "100%", backgroundColor: "#00000000" }}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handlePostSubmit}>
            <Form.Group className="mb-3" controlId="Form.ControlTextarea">
              <Form.Label></Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                placeholder="당신의 이야기를 그림으로 만들어 드려요!"
                style={{ resize: "none" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Generate
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostModal;
