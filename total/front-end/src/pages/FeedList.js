import React, { useState } from "react";
import "./Feed.css";
import FeedModal from "./FeedModal";

function FeedList(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function handleCloseModal() {
    setModalOpen(false);
  }

  function ShowModal() {
    setModalOpen(true);
  }

  console.log(props.item.writerPic);

  return (
    <>
      <div
        id="feed-list"
        className="feed-list"
        key={props.item.fileName}
        style={{
          backgroundImage: `url(${props.item.fileName})`,
          backgroundSize: "cover",
        }}
        onClick={() => {
          ShowModal();
        }}
      >
        {modalOpen && (
          <>
            <div
              id="modal-background"
              style={{
                opacity: 0.3,
                backgroundColor: "black",
                pointerEvents: "all",
                cursor: "Default",
              }}
              onClick={() => {
                handleCloseModal();
              }}
            ></div>
            <div
              id="feed-modal"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <div
                id="feed-close"
                onClick={() => {
                  handleCloseModal();
                }}
              >
                &times;
              </div>
              <FeedModal data={props.item} />
            </div>
          </>
        )}
        <div id="feed-writer" className="feed-item">
          <div
            id="feed-writer-pic"
            key={props.item.writerPic}
            style={{
              backgroundImage: `url(${props.item.writerPic})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div id="feed-writer-name">
            <p id="feed-small-font" key={props.item.writerName}>
              {props.item.writerName}
            </p>
          </div>
        </div>
        <div id="feed-like" className="feed-item">
          <div id="feed-like-cnt">
            <p id="feed-small-font-right" key={props.item.likeCnt}>
              {props.item.likeCnt}
            </p>
          </div>
          <div
            id="feed-like-icon"
            style={{
              backgroundImage: `url(/heart.png)`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div id="feed-content" className="feed-item">
          <p id="feed-small-font" key={props.item.originContent}>
            {props.item.originContent}
          </p>
        </div>
      </div>
    </>
  );
}

export default FeedList;
