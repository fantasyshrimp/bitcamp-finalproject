import React from "react";
import Modal from 'react-modal';
import "./FollowListModal.css";
import SmallProfile from "./SmallProfile";
import FollowBtn from "./FollowBtn";

Modal.setAppElement('#root')

function FollowListModal(props) {
  
  return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}
        style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: { width: '380px', height: '500px', margin: 'auto', backgroundColor: '#212529',
        border: 'none', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
        overflow: 'auto', 
        display: 'flex',
        justifyContent: 'center',
        }}}
        >
        <div>
        {props.follows !== undefined && props.follows.map((follow) => (
          <div key={follow.no} style={{ display: 'flex', alignItems: 'center'}}>
            <SmallProfile key={follow.no + "SamllProfile"}
              modalClose={props.onRequestClose}
              no={follow.no} imgUrl={follow.profilePhoto} nickname={follow.nickname} height='70' />
            <div>
            <FollowBtn key={follow.no + "FollowBtn"}
              followerNo={follow.no} />
            </div>
          </div>
          ))} 
        </div>
        </Modal>
  );
}

export default FollowListModal;