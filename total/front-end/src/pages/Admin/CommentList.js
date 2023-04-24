import React, { useEffect, useState } from "react";
import styles from "./CommentList.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import FeedModal from "../Feed/FeedModal"; // FeedModal 컴포넌트 import
import NavBar from "./NavBar";

function CommentList(props) {
  const [data, setData] = useState([]);
  const [selectedNo, setSelectedNo] = useState();
  /*
  //
  const [modalOpen, setModalOpen] = useState(false);

  function handleCloseModal() {
    setModalOpen(false);
  }

  function ShowModal() {
    setModalOpen(!modalOpen);
    if (modalOpen !== true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
  //*/
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/comment")
      .then((response) => {
        console.log("data : ");
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleBoardSelect(selectedNo) {
    console.log("Selected board:", selectedNo);
    setSelectedNo(selectedNo);
  }

  return (
    <>
      <div className={styles.CommentList}>
        <h1>관리 페이지</h1>
        <NavBar />
        <Table
          striped
          bordered
          hover
          variant={props.isLightMode === true ? "light" : "dark"}
        >
          <thead>
            <tr>
              <th>댓글번호</th>
              <th>게시물번호</th>
              <th>닉네임</th>
              <th>내용</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody>
            {data.map((comment) => (
              <tr key={comment.replyNo}>
                <td onClick={() => handleBoardSelect(comment.boardNo)}>
                  {comment.replyNo}
                </td>
                <td onClick={() => handleBoardSelect(comment.boardNo)}>
                  {comment.boardNo}
                </td>
                <td onClick={() => handleBoardSelect(comment.boardNo)}>
                  {comment.writer.nickname}
                </td>
                <td onClick={() => handleBoardSelect(comment.boardNo)}>
                  {comment.content}
                </td>
                <td onClick={() => handleBoardSelect(comment.boardNo)}>
                  {comment.writeDt}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CommentList;

//<FeedModal data={props.item} closeModal={ShowModal} />
