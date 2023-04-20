import React, { useEffect, useState } from "react";
import styles from "./BoardList.module.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import BoardView from "./BoardView";

function BoardList() {
  const [data, setData] = useState([]);
  const [selectedNo, setSelectedNo] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/board")
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleBoardSelect(selectedNo) {
    if (!selectedNo) {
      return;
    }

    console.log("Selected board:", selectedNo);
    setSelectedNo(selectedNo);
  }

  return (
    <>
      <div className={styles.BoardList}>
        <h1>게시물 관리</h1>
        <BoardView />
        <h3>
          <a href="./MemberList">회원 목록</a>
          <a href="./BoardList">(test)게시물 목록</a>
          <a href="./CommentList">(test)댓글 목록</a>
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
            {data.map((board) => (
              <tr key={board.boardNo}>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.boardNo}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.writer.nickname}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.originContent}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.summaryContent}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.transContent}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.likeCnt}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.viewCnt}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.writeDt}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.updateDt}
                </td>
                <td onClick={() => handleBoardSelect(board.boardNo)}>
                  {board.reportCnt}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default BoardList;
