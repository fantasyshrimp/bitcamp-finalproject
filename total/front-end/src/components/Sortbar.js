import React, { useEffect, useState } from "react";
import { FaRandom } from "react-icons/fa";
import { RiHistoryLine, RiUserFollowLine } from "react-icons/ri";
import axios from "axios";

function Sortbar(props) {
  const [auth, setAuth] = useState(false);
  const Click = (param) => {
    console.log(param);
    axios
      .post(
        "http://localhost:8080/boards/sort",
        {},
        {
          params: {
            sort: param,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          if (window.location.pathname === "/Feed") {
            window.location.reload();
          } else {
            // Navigate("/Feed");
            window.location.href = "/Feed";
          }
        } else {
          console.log("에러");
        }
      })
      .catch((error) => {});
  };

  function handleClick(event) {
    event.preventDefault();
    window.location.reload();
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/boards/auth`)
      .then((response) => setAuth(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="tag-bar" className="d-flex align-items-center">
      <div
        onClick={handleClick}
        className={`tag btn btn-tag-${
          localStorage.getItem("isLightMode") === "true" ? "white" : "dark"
        }`}
      >
        <div className="d-flex justify-content-center align-items-center">
          <FaRandom className="me-1" />
          <span className="tag-text">Random</span>
        </div>
      </div>
      <div
        onClick={() => Click("hot")}
        className={`tag btn btn-tag-${
          localStorage.getItem("isLightMode") === "true" ? "white" : "dark"
        }`}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div
            id="tag-image"
            style={{
              backgroundImage: `url(/campfire.png)`,
              backgroundSize: "cover",
            }}
            className="me-1"
          ></div>
          HOT
        </div>
      </div>
      <div
        onClick={() => Click("recent")}
        className={`tag btn btn-tag-${
          localStorage.getItem("isLightMode") === "true" ? "white" : "dark"
        }`}
      >
        <div className="d-flex justify-content-center align-items-center">
          <RiHistoryLine className="me-1" />{" "}
          <span className="tag-text">Recently</span>
        </div>
      </div>
      {auth && (
        <div
          onClick={() => Click("follow")}
          className={`tag btn btn-tag-${
            localStorage.getItem("isLightMode") === "true" ? "white" : "dark"
          }`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <RiUserFollowLine className="me-1" />{" "}
            <span className="tag-text">Follow</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sortbar;
