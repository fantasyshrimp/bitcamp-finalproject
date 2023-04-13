import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function TempAlarmData({data}) {
    const {log, giver, receiver} = data;
    const [isMouseOver, setIsMouseOver] = useState(false);
    const navigate = useNavigate();
    //navigate('/Profile', { state: { no: no } });

    function moveDirect() {
      //읽음처리 필요
      switch (log.typeNo) {
        case 11:
          navigate('/Profile', { state: { 
            no: log.memberNo,
            directModal: { type: "board", no: log.contentNo }          
          }});
          break;
        case 14:
          navigate('/Profile', { state: { 
            no: receiver.no,
            directModal: { type: "board", no: log.contentNo }       
          }});
          break;
        case 21:
          // navigate('/Profile', { state: { 
          //   no: receiver.no,
          //   directModal: { type: "reply", no: log.contentNo }
          // }}); 내 게시글에 댓글이 달림
          break;
        case 24:          
          console.log("내댓글에 좋아요 로그");
          break;
        case 31:
          navigate('/Profile', { state: { 
            no: receiver.no,
            directModal: { type: "follow", no: giver.contentNo }
          }});
          break;
      }
    }

    const handleMouseOver = () => {
      setIsMouseOver(true);
    };
  
    const handleMouseLeave = () => {
      setIsMouseOver(false);
    };

    //{log.typeNo}에 따라 클릭이벤트가 분기
    return (
    <div onClick={moveDirect}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{width: "80%", height: "60px", minWidth: "600px",
      padding: "5px 0px", marginLeft: "50px",
      backgroundColor: isMouseOver ? "#007bff" : "#343a40",
      color: "white"
      }} >
      <img src={giver.profilePhoto} style={{width: "50px", height: "50px", borderRadius: "50%"}}/>
      {giver.nickname}님이 {log.contentNo}번  {log.content} {log.recordDate}
    </div>);
}

export default TempAlarmData;