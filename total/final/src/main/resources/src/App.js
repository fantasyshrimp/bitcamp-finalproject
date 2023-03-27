import "./reset.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  return (
    <div id="nav-bar">
      <h1 id="title">Artify</h1>
      <div id="modal-back">
        <Modal />
      </div>
    </div>
  );
}

function Body() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => setHello(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="body">
      <div id="body-sub">
        <p id="big-font">{hello}</p>
        <div id="start-btn">Start ☜</div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer">
      <p id="small-font">created by Someone</p>
    </div>
  );
}

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <p id="login-btn" onClick={handleOpenModal}>
        Login
      </p>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>로그인</h2>
            <p>Modal content goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
