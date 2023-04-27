import React, { useEffect, useState } from "react";
import { FaRandom } from "react-icons/fa";
import { RiHistoryLine, RiUserFollowLine } from "react-icons/ri";
import axios from "axios";

function Sortbar() {
  const [auth, setAuth] = useState(false);
  const currentPath = window.location.pathname.split("/")[2] || "random";

  if (currentPath !== "random") {
    axios
      .post(
        "http://localhost:8080/boards/sort",
        {},
        {
          params: {
            sort: currentPath,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
        } else {
          console.log("에러");
        }
      })
      .catch((error) => {});
  }

  const Click = (param) => {
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
          window.location.href = `/feed/${param === "random" ? "" : param}`;
        } else {
          console.log("에러");
        }
      })
      .catch((error) => {});
  };

  function handleClick(event) {
    event.preventDefault();
    window.location.href = "/feed/";
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/boards/auth`)
      .then((response) => setAuth(response.data))
      .catch((error) => console.log(error));
  }, []);

  const getButtonClass = (param) => {
    let btnTagLast = "";

    if (
      window.location.pathname.split("/")[2] === param ||
      (param === "random" &&
        (window.location.pathname.split("/")[2] === "" ||
          window.location.pathname.split("/").length === 2))
    ) {
      btnTagLast =
        localStorage.getItem("isLightMode") === "true" ? "dark" : "white";
    } else {
      btnTagLast =
        localStorage.getItem("isLightMode") === "true" ? "white" : "dark";
    }

    const baseClass = `tag btn btn-tag-${btnTagLast}`;

    return baseClass;
  };

  return (
    <div id="tag-bar" className="d-flex align-items-center">
      <div onClick={handleClick} className={getButtonClass("random")}>
        <div className="d-flex justify-content-center align-items-center">
          <FaRandom className="me-1" />
          <span className="tag-text">Random</span>
        </div>
      </div>
      <div onClick={() => Click("hot")} className={getButtonClass("hot")}>
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
      <div onClick={() => Click("recent")} className={getButtonClass("recent")}>
        <div className="d-flex justify-content-center align-items-center">
          <RiHistoryLine className="me-1" />{" "}
          <span className="tag-text">Recent</span>
        </div>
      </div>
      {auth && (
        <div
          onClick={() => Click("follow")}
          className={getButtonClass("follow")}
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
