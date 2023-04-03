import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentLike(props) {
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/reply/islike/" + props.replyNo)
      .then((response) => {
        if (response.data.data === "like") {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLike = () => {
    setIsLike(!isLike);

    if (isLike) {
      axios
        .delete("http://localhost:8080/api/reply/like/" + props.replyNo)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log(props.replyNo);
      axios
        .post(
          "http://localhost:8080/api/reply/like",
          {},
          {
            params: {
              replyNo: props.replyNo,
            },
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
    <>
      <div
        id="feed-modal-commentheart"
        style={{
          backgroundImage: isLike ? `url(/heart.png)` : `url(/unheart.png)`,
          backgroundSize: "cover",
        }}
        onClick={handleLike}
      ></div>
    </>
  );
}

export default CommentLike;
