import React, { useEffect, useState } from "react";
import styles from "./MemberList.module.css";
import MemberView from "./MemberView";

function MemberList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/member")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  function handleColumnSelect(selectedColumn) {
    console.log(`Selected column: ${selectedColumn}`);
  }

  return (
    <div className={styles.MemberList}>
      <h1>회원 관리</h1>
      <MemberView />
      <h3>회원 목록</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>회원번호</th>
            <th className={styles.th}>닉네임</th>
            <th className={styles.th}>이메일</th>
            <th className={styles.th}>가입일</th>
            <th className={styles.th}>포인트</th>
            <th className={styles.th}>성별</th>
            <th className={styles.th}>기본주소</th>
            <th className={styles.th}>포인트</th>
            <th className={styles.th}>전화번호</th>
            <th className={styles.th}>비밀번호 변경일시</th>
            <th className={styles.th}>계정상태</th>
            <th className={styles.th}>권한레벨</th>
          </tr>
        </thead>
        <tbody>
          {data.map((member) => (
            <tr key={member.no}>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.no}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.nickname}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.email}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.createdDate}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.point}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.gender}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.basicAddress}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.point}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.tel}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.passwordDate}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.accountState}
              </td>
              <td className="td" onClick={() => handleColumnSelect(member.no)}>
                {member.authLevel}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberList;
