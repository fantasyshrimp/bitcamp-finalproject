import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div id="nav-bar">
        <Link to="/"><h1 id="title">Artify</h1></Link>
        <Link to="/Feed/"><h1 id="title">Feed</h1></Link>
        <Link to="/Profile"><h1 id="title">Profile</h1></Link>
        <div id="modal-back">
          <Modal />
        </div>
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

export default Navbar;