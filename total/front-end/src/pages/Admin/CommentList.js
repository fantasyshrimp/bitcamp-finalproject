import React, { useEffect, useState } from "react";
import styles from "./CommentList.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";

function CommentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/commentlist")
      .then((response) => {
        console.log("data : ");
        console.log(response.data);
        setData(response.data);
        console.log(data.replyNo);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className={styles.CommentList}>
        <h1>댓글 관리 // 백엔드 데이터연결까지 완료 </h1>
        <h3>
          <a href="./Admin/MemberList">회원 목록</a>
          <a href="../BoardList">(test)게시물 목록</a>
          <a href="#">(test)댓글 목록</a>
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
            <tr>
              <td>{data.no}</td>
              <td>게시물번호</td>
              <td>닉네임</td>
              <td>내용</td>
              <td>작성일시</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default CommentList;
