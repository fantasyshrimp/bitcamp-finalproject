import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styles from "./BoardView.module.css";
import axios from "axios";

function CommentView(props) {
  const { show, setShow, no } = props;
  const handleClose = () => setShow(false);
  const [data, setData] = useState({});
  const [tag, setTag] = useState({});

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
                value={data && data.writer ? data.writer.nickname : ""}
                onChange={(e) =>
                  setData({
                    ...data,
                    writer: { ...data.writer, nickname: e.target.value },
                  })
                }
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
                value={data.originContent}
                onChange={(e) =>
                  setData({ ...data, originContent: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>요약 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="summaryContent"
                value={data.summaryContent}
                onChange={(e) =>
                  setData({ ...data, summaryContent: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className={styles.Label}>번역 내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="transContent"
                value={data.transContent}
                onChange={(e) =>
                  setData({ ...data, transContent: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.short}>태그</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="tag"
                  value={data.tag}
                  onChange={(e) => setData({ ...data, tag: e.target.value })}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.shortTitle}>좋아요</Form.Label>
                <Form.Control
                  className={styles.shortContext}
                  type="text"
                  placeholder="likeCnt"
                  value={data.likeCnt}
                  onChange={(e) =>
                    setData({ ...data, likeCnt: e.target.value })
                  }
                />
                <Form.Label className={styles.shortTitle2}>조회수</Form.Label>
                <Form.Control
                  className={styles.shortContext}
                  type="text"
                  placeholder="viewCnt"
                  value={data.viewCnt}
                  onChange={(e) =>
                    setData({ ...data, viewCnt: e.target.value })
                  }
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <div className="d-flex align-items-center">
                <Form.Label className={styles.longTitle}>
                  게시글 공개
                </Form.Label>
                <Form.Check
                  className={styles.longContext}
                  type="checkbox"
                  id="boardPublic"
                  defaultChecked={data.boardPublic}
                />

                <Form.Label className={styles.longTitle}>댓글 공개</Form.Label>
                <Form.Check
                  className={styles.longContext}
                  type="checkbox"
                  id="replyPublic"
                  defaultChecked={data.replyPublic}
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
                  readOnly
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
                  readOnly
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CommentView;
