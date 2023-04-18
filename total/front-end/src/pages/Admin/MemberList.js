import React, { useEffect, useState } from "react";
import styles from "./MemberList.module.css";
import Table from "react-bootstrap/Table";
import MemberView from "./MemberView";
import { useNavigate } from "react-router-dom";

function MemberList(props) {
  const [data, setData] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedNo, setSelectedNo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.currentUser && props.currentUser.authLevel !== 9) {
      alert("권한이 없습니다.");
      navigate("/");
    }
  }, [props.currentUser]);

  useEffect(() => {
    fetch("http://localhost:8080/admin")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  function handleColumnSelect(selectedNo) {
    console.log("Selected number:", selectedNo);
    setSelectedNo(selectedNo);
    setModalShow(true);

    fetch("http://localhost:8080/admin/" + selectedNo)
      .then((response) => response.json())
      .then((viewData) => {
        setViewData(viewData);
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      {props.currentUser && props.currentUser.authLevel === 9 && (
        <div className={styles.MemberList}>
          <h1>회원 관리</h1>
          <h3>회원 목록</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>회원번호</th>
                <th>닉네임</th>
                <th>이메일</th>
                <th>가입일</th>
                <th>포인트</th>
                <th>성별</th>
                <th>기본주소</th>
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
                    {member.basicAddress}
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
      )}
      <MemberView show={modalShow} setShow={setModalShow} no={selectedNo} />
    </>
  );
}

export default MemberList;
