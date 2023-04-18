import React, { useEffect, useState } from "react";
import styles from "./MemberList.module.css";
import Table from "react-bootstrap/Table";
import MemberView from "./MemberView";
import axios from "axios";
import BoardList from "./BoardList";

function MemberList() {
  const [data, setData] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedNo, setSelectedNo] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin")
      .then((response) => {
        console.log("data : ");
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  function handleColumnSelect(selectedNo) {
    console.log("Selected number:", selectedNo);
    setSelectedNo(selectedNo);
    setModalShow(true);
  }

  return (
    <>
      <div className={styles.MemberList}>
        <h1>회원 관리</h1>
        <h3>
          회원 목록
          <a href="../BoardList">(test)게시물 목록</a>
          <a href="#">(test)댓글 목록</a>
        </h3>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>회원번호</th>
              <th>닉네임</th>
              <th>이메일</th>
              <th>가입일</th>
              <th>포인트</th>
              <th>성별</th>
              <th>포인트</th>
              <th>전화번호</th>
              <th>비밀번호 변경일시</th>
              <th>계정상태</th>
              <th>권한레벨</th>
            </tr>
          </thead>
          <tbody>
            {data.map((member) => (
              <tr key={member.no}>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.no}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.nickname}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.email}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.createdDate}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.point}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.gender === 0
                    ? "미정"
                    : member.gender === 1
                    ? "남"
                    : member.gender === 2
                    ? "여"
                    : ""}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.point}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.tel}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.passwordDate}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.accountState === 0
                    ? "이메일 인증"
                    : member.accountState === 1
                    ? "이메일 미인증"
                    : member.accountState === 2
                    ? "휴면계정"
                    : member.accountState === 3
                    ? "탈퇴"
                    : member.accountState === 4
                    ? "정지"
                    : ""}
                </td>
                <td
                  className="td"
                  onClick={() => handleColumnSelect(member.no)}
                >
                  {member.authLevel === 0
                    ? "일반"
                    : member.authLevel === 9
                    ? "관리자"
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <MemberView show={modalShow} setShow={setModalShow} no={selectedNo} />
    </>
  );
}

export default MemberList;
