import React, { useEffect, useState } from "react";
import styles from "./BoardList.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";

function BoardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/board")
      .then((response) => {
        console.log("data : ");
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className={styles.BoardList}>
        <h1>게시물 관리</h1>
        <h3>
          <a href="./Admin/MemberList">회원 목록</a>
          <a href="#">(test)게시물 목록</a>
          <a href="./Admin/CommentList">(test)댓글 목록</a>
        </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>게시글번호</th>
              <th>닉네임</th>
              <th>원본내용</th>
              <th>요약내용</th>
              <th>번역내용</th>
              <th>좋아요</th>
              <th>조회수</th>
              <th>작성일</th>
              <th>수정일</th>
              <th>신고횟수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>게시글번호</td>
              <td>닉네임</td>
              <td>원본내용</td>
              <td>요약내용</td>
              <td>번역내용</td>
              <td>좋아요</td>
              <td>조회수</td>
              <td>작성일</td>
              <td>수정일</td>
              <td>신고횟수</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default BoardList;
