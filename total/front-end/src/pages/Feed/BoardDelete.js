import React, { useEffect, useState } from "react";

function BoardMenu(props) {
  return (
    <>
      <div
        id="modal-background"
        style={{
          opacity: 0.3,
          backgroundColor: `var(--aim-base-tone-down)`,
          pointerEvents: "all",
          cursor: "Default",
        }}
        onClick={props.DeleteModalHandler}
      ></div>
      <div id="report-main">
        <div id="report-title">
          <span id="report-close" onClick={props.DeleteModalHandler}>
            &times;
          </span>
          게시글 삭제
        </div>
        <div id="report-contentbox">
          <div id="menu-box">
            <div id="menu-text">정말 삭제하시겠습니까?</div>
            <div id="btn-div">
              <div id="menu-btn" onClick={props.closeModal}>
                네
              </div>
              <div id="menu-btn2" onClick={props.DeleteModalHandler}>
                아니요
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoardMenu;
