import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeedModal.css";
import CommentUtil from "./CommentUtil";
import LikeIcon from "../LikeIcon";
import SmallProfile from "../profile/SmallProfile";
import SmallProfileName from "../profile/SmallProfileName";
import FollowBtn from "../profile/FollowBtn";
import { Modal } from "react-bootstrap";

function FeedModal(props) {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const boardNo = props.data.boardNo;
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:8080/reply",
        {},
        {
          params: {
            boardNo: boardNo,
            content: value,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setIsUpdated(!isUpdated);
          setValue("");
        } else {
          alert("입력실패");
        }
      })
      .catch((error) => {
        alert("로그인 후 입력가능합니다.");
      });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function handleUpdate() {
    setIsUpdated(!isUpdated);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/reply/${boardNo}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [isUpdated]);

  if (!Array.isArray(data)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div id="feed-modal-image" style={{ display: "table" }}>
        <div
          id="feed-modal-pic"
          style={{
            backgroundImage: `url(${props.data.fileName})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div id="modal-like-icon">
            <LikeIcon size={30} contentType={"board"} contentNo={boardNo} />
          </div>
        </div>
      </div>
      <div id="feed-modal-content">
        <div id="feed-modal-profile">
          <SmallProfile
            modalClose={props.closeModal}
            no={props.data.writer.no}
            imgUrl={props.data.writer.profilePhoto}
            nickname={props.data.writer.nickname}
            height="50"
          />
          <div id="feed-modal-follow">
            <FollowBtn followerNo={props.data.writer.no} />
          </div>
          {/* <div id="feed-modal-setting">설정</div> */}
          {/* <div
            id="feed-modal-like"
            style={{
              backgroundImage: `url(/menu.png)`,
              backgroundSize: "cover",
            }}
          ></div> */}
        </div>
        <div id="feed-modal-originalcontent" key={props.data.originContent}>
          <p>{props.data.originContent}</p>
          <div id="feed-modal-day" key={props.data.writeDt}>
            {props.data.writeDt}
          </div>
          <div id="feed-modal-tag" key={props.data.tag}>
            {props.data.tag}
          </div>
        </div>
        <div id="feed-modal-commentinput">
          <form onSubmit={handleSubmit}>
            <input
              id="feed-modal-inputbox"
              type="text"
              name="content"
              value={value}
              onChange={handleChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  setValue(event.target.value);
                }
              }}
            />
          </form>
        </div>
        <div id="feed-modal-comscroll">
          {data.map((item) => (
            <>
              <div id="feed-modal-comment">
                <div
                  id="feed-modal-commentpic"
                  style={{
                    backgroundImage: `url(${item.writer.profilePhoto})`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div id="feed-modal-com">
                  <div id="feed-modal-commentwriter">
                    <div id="feed-modal-comwriter" key={item.writer.nickname}>
                      <SmallProfileName
                        no={item.writer.no}
                        nickname={item.writer.nickname}
                        modalClose={props.closeModal}
                      />
                    </div>
                    <div id="feed-modal-comdt" key={item.writeDt}>
                      {item.writeDt}
                    </div>
                  </div>
                  <div id="feed-modal-commentcontent" key={item.content}>
                    {item.content}
                    <CommentUtil
                      commentNo={item.replyNo}
                      writerNo={item.writer.no}
                      onUpdate={handleUpdate}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default FeedModal;
