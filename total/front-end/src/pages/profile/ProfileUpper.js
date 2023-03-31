import React, { useState } from "react";
import Modal from 'react-modal';
import "./ProfileUpper.css";
import SmallProfile from "./SmallProfile";

Modal.setAppElement('#root');

function ProfileUpper(props) {     
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
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
                  <div onClick={openModal}> followers</div>
                  <div> followers</div>
                  <div> likes</div>                    
                </div>
            </div>


        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}
        style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: { width: '450px', height: '800px', margin: 'auto', backgroundColor: '#000000' }}}
        >
        <div>
        {props.followings.map((following) => (
            <SmallProfile modalClose={closeModal}
              no={following.no} imgUrl={following.profilePhoto} nickname={following.nickname} height='100' />
            ))} 
        </div>
        </Modal>
    </>
  );
}

export default ProfileUpper;