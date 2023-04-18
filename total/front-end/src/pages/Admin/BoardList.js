import React, { useEffect, useState } from "react";
import styles from "./BoardList.module.css";
import Table from "react-bootstrap/Table";

function BoardList() {
  return (
    <>
      <div className={styles.BoardList}>
        <h1>게시물 관리 // back-end 컨트롤러 작성 및 mapper 질문하기</h1>
        <h3>
          <a href="./Admin/MemberList">회원 목록</a>
          <a href="#">(test)게시물 목록</a>
          <a href="../CommentList">(test)댓글 목록</a>
        </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>게시글번호</th>
              <th>닉네임</th>
              <th className={styles.context}>원본내용</th>
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
              <td>1</td>
              <td>Mark</td>
              <td>
                당신은 지금, 창밖에 비가 내리는 밤을 보내고 있습니다. 조용한
                노래와 책 소리가 당신을 감싸며, 당신은 차분해지고 생각에 잠기게
                됩니다. 이 밤이 당신에게 주는 건 단순한 휴식이 아니라, 자신의
                내면을 살펴보는 시간을 선사합니다.
              </td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default BoardList;
