import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedModal.css";

function CommentUtil(props) {
  const [data, setData] = useState([]);

  function handleSubmit(event) {
    props.onUpdate();
  }

  function CommentDel() {
    axios
      .delete(`http://localhost:8080/api/reply/delete/${props.commentNo}`)
      .then((response) => {
        if (response.data.status === "success") {
          handleSubmit();
        } else {
          alert("삭제실패");
        }
      })
      .catch((error) => {});
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/reply/like/${props.commentNo}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <div id="feed-modal-commentutil">
      <div id="feed-modal-commentlike">좋아요 {data[0]}개</div>
      <div id="feed-modal-commentreport">신고하기</div>
      {data[1] == props.writerNo && (
        <div id="feed-modal-commentdelete" onClick={CommentDel}>
          삭제하기
        </div>
      )}
    </div>
  );
}

export default CommentUtil;
