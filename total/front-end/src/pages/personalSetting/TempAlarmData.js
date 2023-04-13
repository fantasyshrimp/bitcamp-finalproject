import React from "react";
import { useNavigate } from "react-router-dom";


function TempAlarmData({data}) {
    const {log, user} = data;

    const navigate = useNavigate();
    //navigate('/Profile', { state: { no: no } });

    function moveDirect() {

      switch (log.typeNo) {
        case 11:
          console.log("팔로워가 게시글작성 로그인듯?")
          navigate('/Profile', { state: { no: log.memberNo } });
          break;
        case 14:
          console.log(user);
          navigate('/Profile', { state: { no: user.no } }); //다 똑같은건데 번호를 내개시글관련이면 12번으로 날려야함
          console.log("내게시글 좋아요 로그인듯?")
          break;
        case 21:
          navigate('/Profile', { state: { no: user.no } });
          console.log("내게시글 댓글단 로그인듯?")
          break;
        case 24:
          navigate('/Profile', { state: { no: user.no } });
          console.log("내댓글에 좋아요 로그인듯?")
          break;
        case 31:
          console.log("팔로우 로그인듯?")
          break;
      }







      console.log(log.logNo + "번로그가 선택됨");
    }

    console.log(data); //{log.typeNo}에 따라 클릭이벤트가 분기
    return (
    <div onClick={moveDirect}
      style={{width: "500px", height: "60px", padding: "5px 0px", backgroundColor: "white"}}>
      <img src={user.profilePhoto} style={{width: "50px", height: "50px"}}/>
      {user.nickname}님이 {log.contentNo}번  {log.content}
    </div>);
}

export default TempAlarmData;