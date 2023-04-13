import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "./FollowListModal.css";
import axios from "axios";

Modal.setAppElement("#root");

function PointModal(props) {
  const [pointLog, setPointLog] = useState([]);
  let toPoint = props.totalpoint;

  useEffect(() => {
    axios.get("http://localhost:8080/point/log").then((response) => {
      setPointLog(response.data);
      console.log(pointLog);
    });
  }, [props.isOpen]);

  function getTypeName(type) {
    switch (type) {
      case 1:
        return "댓글 작성 보너스";
      case 2:
        return "좋아요 보너스";
      case 3:
        return "게시글 작성 보너스";
      case 4:
        return "로그인 보너스";
      case 5:
        return "회원가입 보너스";
      case 6:
        return "유저간 후원";
      default:
        return "";
    }
  }

  const numberWithCommas = (number) => {
    // 천의 자리마다 , 찍기
    return number
      ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : "0";
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          width: "380px",
          height: "500px",
          margin: "auto",
          backgroundColor: "#212529",
          border: "none",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
        },
      }}
    >
      <div id="point">
        {pointLog.map((item) => {
          if (props.memberNo === item.getMemberNo) {
            toPoint -= item.point;
          } else if (props.memberNo !== item.getMemberNo) {
            toPoint += item.point;
          }

          return (
            <div id="point-log">
              <div id="point-log-content">
                <div id="point-log-title">{getTypeName(item.type)}</div>
                {props.memberNo === item.getMemberNo && (
                  <div id="point-log-getpoint">+ {item.point}</div>
                )}
                {props.memberNo !== item.getMemberNo && (
                  <div id="point-log-sendpoint">- {item.point}</div>
                )}
              </div>
              <div id="point-log-time">{item.getDt}</div>
              <div id="point-log-total">
                이전 포인트 : {numberWithCommas(toPoint)}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}

export default PointModal;
