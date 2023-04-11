import React, { useState, useEffect } from "react";
// import "./Feed.css";
import FeedModal from "./FeedModal";
import LoginModal from "../../components/auth/LoginModal";

function FeedList(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [loginShow, setLoginShow] = useState(null);

  function handleCloseModal() {
    setModalOpen(false);
  }

  function ShowModal() {
    setModalOpen(true);
  }

  const handleLoginShow = () => {
    props.setIsLoginModal(true);
    props.setLoginShow(true);
  };

  return (
    <>
      <div
        id="feed-list"
        className="feed-list"
        key={props.item.fileName}
        style={{
          backgroundImage: `url(${props.item.fileName})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        onClick={() => {
          {
            props.auth && ShowModal();
          }
          {
            !props.auth && handleLoginShow();
          }
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
              <FeedModal data={props.item} closeModal={handleCloseModal} />
            </div>
          </>
        )}
        <div id="feed-writer" className="feed-item">
          <div
            id="feed-writer-pic"
            key={props.item.writer.profilePhoto}
            style={{
              backgroundImage: `url(${props.item.writer.profilePhoto})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div id="feed-writer-name">
            <p id="feed-small-font" key={props.item.writer.nickname}>
              {props.item.writer.nickname}
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
