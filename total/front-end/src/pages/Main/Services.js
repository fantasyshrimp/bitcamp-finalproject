import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsBrush } from "react-icons/bs";

function Services() {
  return (
    <div
      className="container"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://pbs.twimg.com/media/FTGMfjGaMAA1V-C?format=jpg&name=4096x4096')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        height: "500px",
      }}
    >
      <div
        style={{ margin: "90px auto", textAlign: "center" }}
        className="services"
      >
        <h1>Our Services</h1>
      </div>
      <div className="row">
        <div className="col-md-3 text-center">
          <div
            className="icon"
            style={{
              fontSize: "40px",
              margin: "20px auto",
              padding: "20px",
              height: "80px",
              width: "80px",
              border: "1px solid white",
              borderRadius: "50%",
            }}
          >
            <BsBrush />
          </div>
          <h3>피드</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <div
            className="icon"
            style={{
              fontSize: "40px",
              margin: "20px auto",
              padding: "20px",
              height: "80px",
              width: "80px",
              border: "1px solid white",
              borderRadius: "50%",
            }}
          >
            <BsBrush />
          </div>
          <h3>게시글 / 댓글 작성</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <div
            className="icon"
            style={{
              fontSize: "40px",
              margin: "20px auto",
              padding: "20px",
              height: "80px",
              width: "80px",
              border: "1px solid white",
              borderRadius: "50%",
            }}
          >
            <BsBrush />
          </div>
          <h3>좋아요 / 포인트</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="col-md-3 text-center">
          <div
            className="icon"
            style={{
              fontSize: "40px",
              margin: "20px auto",
              padding: "20px",
              height: "80px",
              width: "80px",
              border: "1px solid white",
              borderRadius: "50%",
            }}
          >
            <BsBrush />
          </div>
          <h3>내 프로필</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
