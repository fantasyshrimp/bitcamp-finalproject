import React, { useEffect, useState } from "react";
import axios from "axios";

function BoardMenu(props) {
  const [select, setSelect] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const [menuNum, setMenuNum] = useState();
  const [menuTitle, setMenuTitle] = useState("");

  function selected() {
    setSelect(!select);
  }

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    console.log(textareaValue);
  };

  return (
    <>
      <div
        id="modal-background"
        style={{
          opacity: 0.3,
          backgroundColor: "black",
          pointerEvents: "all",
          cursor: "Default",
        }}
        onClick={props.MenuModalHandler}
      ></div>
      <div id="report-main">
        <div id="report-title">
          <span id="report-close" onClick={props.MenuModalHandler}>
            &times;
          </span>
          게시글 관리
        </div>
        <div id="report-contentbox">
          {!select && (
            <>
              <div
                id="report-menu"
                // key={item}
                onClick={() => {
                  setMenuNum(1);
                  setMenuTitle("수정");
                  selected();
                }}
              >
                수정
                <div
                  id="report-menuicon"
                  style={{
                    backgroundImage: `url(/next.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
              <div
                id="report-menu"
                // key={item}
                onClick={() => {
                  setMenuNum(2);
                  setMenuTitle("삭제");
                  selected();
                }}
              >
                삭제
                <div
                  id="report-menuicon"
                  style={{
                    backgroundImage: `url(/next.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </>
          )}
          {select && menuNum === 1 && (
            <>
              <div id="report-menu" onClick={selected}>
                {menuTitle}
                <div
                  id="report-menuicon"
                  style={{
                    backgroundImage: `url(/next.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                    transform: "rotate(180deg)",
                  }}
                ></div>
              </div>
              <div id="report-box">
                <div id="report-text">
                  <textarea
                    id="menu-textarea"
                    name="content"
                    onChange={handleTextareaChange}
                  >
                    {props.originContent}
                  </textarea>
                </div>
                <div
                  id="report-btn"
                  onClick={props.closeModal}
                  // onClick={handleSubmit}
                >
                  제출
                </div>
              </div>
            </>
          )}
          {select && menuNum === 2 && (
            <>
              <div id="menu-box">
                <div id="menu-text">정말 삭제하시겠습니까?</div>
                <div id="btn-div">
                  <div id="menu-btn" onClick={props.closeModal}>
                    네
                  </div>
                  <div id="menu-btn2" onClick={selected}>
                    아니요
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default BoardMenu;
