import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import axios from "axios";
import "./ProfileUpper.css";

Modal.setAppElement('#root');

function ProfileUpper(props) {     
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    console.log(props.following);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    return (
    <>
        <div id="profileUpper">
            <div className="profile-image" 
              style={{ 
                backgroundImage: `url(${props.member.profilePhoto})`,
                backgroundSize: 'cover' }}></div>
            <div className="profile-info">
                <div className="profile-name">{props.member.nickname}</div>
                <div className="profile-detail">
                    <ul>
                        <li onClick={openModal}>followers</li>
                        <li>following</li>
                        <li>likes</li>
                    </ul>
                </div>
            </div>


        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
        style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: { width: '300px', height: '800px', margin: 'auto' }}}
        >
        <div>
        {props.followings.map((following) => (
            <div>{following.nickname}</div>))} 
        </div>
        </Modal>
    </>
  );
}

export default ProfileUpper;