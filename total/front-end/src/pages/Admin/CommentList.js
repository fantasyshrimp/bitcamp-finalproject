import React, { useEffect, useState } from "react";
import styles from "./CommentList.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";

function CommentList() {
  const [data, setData] = useState([]);
  const [selectedNo, setSelectedNo] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/commentlist")
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
        <h1>댓글 관리</h1>
        <h3>
          <a href="./MemberList">회원 목록</a>
          <a href="../BoardList">(test)게시물 목록</a>
          <a href="./CommentList">(test)댓글 목록</a>
        </h3>
        <Table striped bordered hover variant="dark">
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
