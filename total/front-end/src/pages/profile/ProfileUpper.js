import React, { useState } from "react";
import axios from "axios";

import "./ProfileUpper.css";
import FollowBtn from "./FollowBtn";
import FollowListModal from "./FollowListModal";

function ProfileUpper(props) {
  const {followingCnt, followerCnt} = props;
  const [followingList, setFollowingList] = useState([]);
  const [followingModalIsOpen, setFollowingModalIsOpen] = useState(false);
  const openFollowingModal = () => { 
    axios
    .get("http://localhost:8080/follow/" + props.member.no)
    .then((response) => {
      setFollowingList(response.data.data);
      if (response.data.data.length > 0) {
        setFollowingModalIsOpen(true); 
      }
    })
  };
  const closeFollowingModal = () => { setFollowingModalIsOpen(false); };

  const [followerModalIsOpen, setFollowerModalIsOpen] = useState(false);
  const openFollowerModal = () => { setFollowerModalIsOpen(true); };
  const closeFollowerModal = () => { setFollowerModalIsOpen(false); };
  const count = 100;
    return (
    <>
        <div id="profileUpper">
          <div className="profile-image" 
            style={{ 
              width: '100px',
              height: '100px',
              backgroundImage: `url(${props.member.profilePhoto})`,
              backgroundSize: 'cover' }}></div>
          <div className="profile-info">
              <div >
                <div className="profile-name">{props.member.nickname}</div>
                <FollowBtn followerNo={props.member.no} />
              </div>
              <div className="profile-detail">
                <div style={{cursor:"pointer"}} onClick={openFollowingModal}><span>{followingCnt}</span>  followings</div>
                <div style={{cursor:"pointer"}} onClick={openFollowerModal}><span>{followerCnt}</span>  followers</div>
                <div><span>{count}</span>  likes</div>                    
              </div>
          </div>
          <div
            style={{
              paddingTop: '35px'
            }}
          ></div>
        </div>
        <FollowListModal isOpen={followingModalIsOpen} onRequestClose={closeFollowingModal} follows={followingList}/>
        <FollowListModal isOpen={followerModalIsOpen} onRequestClose={closeFollowerModal} follows={props.followers}/>
    </>
  );
}

export default ProfileUpper;