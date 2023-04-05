import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MM.module.css";

function MM() {
  const [memberList, setMemberList] = useState([]);

  // 최초의 컴포넌트 한번 렌더링할 때만 실행되게 하기 위해
  // useEffect 사용하고, useEffect에 두 번째 인자로 dependancy에 아무것도 넣지 않으면
  // 딱 한번만 실행

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios("http://localhost:8080/member");
        if (result.data.status == "success") {
          setCurrentUser(result.data.data);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        alert("로그인 유저 가져오는 중 오류 발생!");
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.MemberList}>
      <h1>회원 관리</h1>
      <h3>회원 목록</h3>
      <table>
        <th>회원번호</th>
        <th>닉네임</th>
        <th>이메일</th>
        <th>비밀번호</th>
        <th>가입일</th>
        <th>성별</th>
        <th>프로필사진명</th>
        <th>기본주소</th>
        <th>포인트</th>
        <th>자기소개글</th>
        <th>생년월일</th>
        <th>전화번호</th>
        <th>비밀번호 변경일시</th>
        <th>계정상태</th>
        <th>권한레벨</th>

        <tr>
          <td>{member.no}</td>
          <td>{member.nickname}</td>
          <td>{member.email}</td>
          <td>{member.password}</td>
          <td>{member.createdDate}</td>
          <td>{member.gender}</td>
          <td>{member.profilePhoto}</td>
          <td>{member.basicAddress}</td>
          <td>{member.point}</td>
          <td>{member.information}</td>
          <td>{member.birthDate}</td>
          <td>{member.tel}</td>
          <td>{member.passwordDate}</td>
          <td>{member.accountState}</td>
          <td>{member.authLevel}</td>
        </tr>
      </table>
    </div>
  );
}

export default MM;
