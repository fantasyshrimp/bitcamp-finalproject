import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Visitor from "./Visitor";
import BoardReply from "./BoardReply";
import "./Stats.css";
import { Nav } from "react-bootstrap";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import subMenu from "../../styles/style";

function Stats(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuNo, setMenuNo] = useState(
    location.state ? location.state.menuNo : 0
  );
  const menu = ["방문자 주간조회", "콘텐츠 일별조회"];

  // console.log("props.currentUser:", props.currentUser);

  useEffect(() => {
    if (
      props.currentUser === null ||
      (props.currentUser && props.currentUser.authLevel !== 9)
    ) {
      // alert("권한이 없습니다.");
      Swal.fire({
        title: "권한이 없습니다.",
        confirmButtonText: "확인",
      });
      navigate("/");
    }
  }, [props.currentUser]);

  return (
    <>
      {props.currentUser && props.currentUser.authLevel === 9 && (
        <div
          style={{
            display: "flex",
            height: "95vh",
            width: "100vw",
            minWidth: "1200px",
            // backgroundColor: "gray",
          }}
        >
          <div style={subMenu}>
            <div
              style={{
                height: "150px",
                // backgroundColor: "gray",
              }}
            ></div>
            <div
              style={{
                marginLeft: "60px",
                // backgroundColor: "blue",
              }}
            >
              <div
                style={{
                  fontSize: "35px",
                  paddingBottom: "5px",
                  marginLeft: "5px",
                  boxSizing: "border-box",
                  cursor: "default",
                  marginBottom: "30px",
                }}
              >
                통계
              </div>
              <Nav
                style={{
                  marginLeft: "15px",
                  // backgroundColor: "blue",
                }}
                className="flex-column"
                defaultActiveKey="#"
              >
                {menu.map((title, index) => {
                  return (
                    <Nav.Link
                      eventKey={index}
                      className={`mt-2 mb-2 personalSetting-menu ${
                        index === menuNo ? "active" : ""
                      }`}
                      href={index === 0 && "#"}
                      style={{
                        padding: "0px",
                        // backgroundColor: "blue",
                      }}
                    >
                      <div
                        key={title + index}
                        onClick={() => {
                          setMenuNo(index);
                        }}
                        style={{
                          fontSize: "16px",
                          cursor: "pointer",
                          padding: "5px",
                          // borderBottom: `solid 1px var(--aim-border)`,
                          // backgroundColor: "blue",
                        }}
                      >
                        {title}
                      </div>
                    </Nav.Link>
                  );
                })}
              </Nav>
            </div>
          </div>
          <div id="Stats-content">
            {menuNo === 0 && <Visitor title={menu[0]} />}
            {menuNo === 1 && <BoardReply title={menu[1]} />}
          </div>
        </div>
      )}
    </>
  );
}

export default Stats;
