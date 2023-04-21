import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Visitor from "./Visitor";
import BoardReply from "./BoardReply";
import "./Stats.css";

function Stats() {
  const location = useLocation(); // 이 코드를 추가해 주세요.
  const [menuNo, setMenuNo] = useState(
    location.state ? location.state.menuNo : 0
  );
  const menu = ["방문자 주간조회", "콘텐츠 일별조회"];

  return (
    <div
      style={{
        // backgroundColor: "blue",
        display: "flex",
        height: "83vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          width: "14.3%",
          minWidth: "100px",
          height: "100%",
          marginLeft: "5%",
          boxSizing: "border-box",
          borderRight: `solid 1px var(--aim-border)`,
          color: `var(--aim-text-default)`,
        }}
      >
        <div style={{ height: "20%" }}></div>
        <div style={{ marginRight: "10%" }}>
          <h2
            style={{
              paddingBottom: "5%",
              boxSizing: "border-box",
              cursor: "default",
            }}
          >
            통계
          </h2>
          <div style={{ marginLeft: "10%", cursor: "pointer", hover: "blue" }}>
            {menu.map((title, index) => {
              return (
                <div
                  style={{
                    // backgroundColor: "blue",
                    paddingBottom: "5%",
                  }}
                  key={title + index}
                  onClick={() => {
                    setMenuNo(index);
                  }}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div id="Stats-content">
        {menuNo === 0 && <Visitor title={menu[0]} />}
        {menuNo === 1 && <BoardReply title={menu[1]} />}
      </div>
    </div>
  );
}

export default Stats;

<g transform="translate(0,74)" style="opacity: 1;">
  <line
    x1="0"
    x2="-5"
    y1="0"
    y2="0"
    style="stroke: rgb(119, 119, 119); stroke-width: 1;"
  ></line>
  <text
    dominant-baseline="central"
    text-anchor="end"
    transform="translate(-10,0) rotate(0)"
    style="font-family: sans-serif; font-size: 11px; fill: rgb(51, 51, 51);"
  >
    60
  </text>
</g>;
