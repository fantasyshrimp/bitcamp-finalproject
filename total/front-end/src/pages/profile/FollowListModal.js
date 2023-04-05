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
        {props.follows !== undefined && props.follows.map((follow) => (
          <div key={follow.no} style={{ display: 'flex'}}>
            <SmallProfile key={follow.no + "SamllProfile"}
              modalClose={props.onRequestClose}
              no={follow.no} imgUrl={follow.profilePhoto} nickname={follow.nickname} height='100' />
            <div style={{ paddingTop: '35px'}}>
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