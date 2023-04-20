import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./BoardView.module.css";
import axios from "axios";

function BoardView(props) {
  const { show, setShow, no } = props;
  const handleClose = () => setShow(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/admin/board/` + no
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [no, setShow]);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <Button variant="primary" onClick={handleClose}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>게시글 번호</Form.Label>
              <Form.Control
                type="text"
                placeholder="boardNo"
                defaultValue={data.boardNo}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>닉네임</Form.Label>
              <Form.Control
                type="text"
                placeholder="nickname"
                defaultValue={data && data.writer ? data.writer.nickname : ""}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>이미지</Form.Label>
              <img src={data.fileName} className={styles.img} alt="" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>원본 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="originContent"
                defaultValue={data.originContent}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>요약 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="summaryContent"
                defaultValue={data.summaryContent}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>번역 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="transContent"
                defaultValue={data.transContent}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.short}>태그</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="tag"
                  defaultValue={data.tag}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.short}>좋아요</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="likeCnt"
                  defaultValue={data.likeCnt}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.short}>조회수</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="viewCnt"
                  defaultValue={data.viewCnt}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.long}>게시글 공개</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="boardPublic"
                  defaultValue={data.boardPublic}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.long}>댓글 공개</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="replyPublic"
                  defaultValue={data.replyPublic}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.short}>작성일</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="writeDt"
                  defaultValue={data.writeDt}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.short}>수정일</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="updateDt"
                  defaultValue={data.updateDt}
                  autoFocus
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.long}>신고 횟수</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="reportCnt"
                  defaultValue={data.reportCnt}
                  autoFocus
                />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BoardView;
