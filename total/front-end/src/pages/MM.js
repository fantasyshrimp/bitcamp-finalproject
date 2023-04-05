import React from "react";
import styles from "./MM.module.css";

function MM() {
  return (
    <div className={styles.MemberList}>
      <h1>Member List</h1>
      <table border="1">
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
          <td>member_no</td>
          <td>name</td>
          <td>email</td>
          <td>pw</td>
          <td>created_dt</td>
          <td>gender</td>
          <td>filename</td>
          <td>addr</td>
          <td>pt</td>
          <td>info</td>
          <td>birth_dt</td>
          <td>tel</td>
          <td>pw_updated_dt</td>
          <td>state</td>
          <td>auth</td>
        </tr>
      </table>
    </div>
  );
}

export default MM;
