import React from "react";
import Modal from 'react-modal';
import SmallProfile from "./SmallProfile";
import FollowBtn from "./FollowBtn";

Modal.setAppElement('#root')

function FollowListModal(props) {
  return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose}
        style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: { width: '450px', height: '800px', margin: 'auto', backgroundColor: '#000000' }}}
        >
        <div>
        {props.followings.map((following) => (
          <div style={{ display: 'flex'}}>
            <SmallProfile modalClose={props.onRequestClose}
              no={following.no} imgUrl={following.profilePhoto} nickname={following.nickname} height='100' />
            <div style={{ paddingTop: '35px'}}>
            <FollowBtn followerNo={following.no} />
            </div>
          </div>
          ))} 
        </div>
        </Modal>
  );
}

export default FollowListModal;