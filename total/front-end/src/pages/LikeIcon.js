import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LikeIcon.css";

function LikeIcon(props) {
  const [likeState, setlikeState] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/like/" + props.contentNo, {
      params: {
        type: props.contentType
      }   
    })
    .then((response) => {       
      console.log("like상태 체크") ;
      if (response.data.data === "like") {
        console.log("좋아하는상태");
        setlikeState(true);
      } else {
        console.log("좋아하지않는상태");
        setlikeState(false);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }, [props.contentNo, props.contentType]);

  const handleLike = () => {
    setlikeState(!likeState);

    if (likeState) {
        axios.delete("http://localhost:8080/like/" + props.contentNo, {
          params: {
            type: props.contentType
          }   
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
        axios.post("http://localhost:8080/like", {
          likerNo: 0,
          contentNo: props.contentNo
        }, {
          params: {
            type: props.contentType
          }
        }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
};

  return (
    <div>
      <input className="like-btn" type="checkbox" checked={likeState} onClick={handleLike}/>
    </div>
  );
}

export default LikeIcon;
