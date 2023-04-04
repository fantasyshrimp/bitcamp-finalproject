import React, { useState } from "react";
import "./ProfileUpper.css";
import LikeIcon from "../LikeIcon";
import FollowBtn from "./FollowBtn";
import FollowListModal from "./FollowListModal";

//FollowListModal.setAppElement('#root');

function ProfileUpper(props) {
  const [followingModalIsOpen, setFollowingModalIsOpen] = useState(false);
  const openFollowingModal = () => { setFollowingModalIsOpen(true); };
  const closeFollowingModal = () => { setFollowingModalIsOpen(false); };

  const [followerModalIsOpen, setFollowerModalIsOpen] = useState(false);
  const openFollowerModal = () => { setFollowerModalIsOpen(true); };
  const closeFollowerModal = () => { setFollowerModalIsOpen(false); };

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
              <div className="profile-name">{props.member.nickname}</div>
              <div className="profile-detail">
                <div onClick={openFollowingModal}> followings</div>
                <div onClick={openFollowerModal}> followers</div>
                <div> likes</div>                    
              </div>
          </div>
          <div
            style={{
              paddingTop: '35px'
            }}
          ><FollowBtn followerNo={props.member.no} /></div>
          <LikeIcon size={30}
          contentType={"reply"} contentNo={5}/>
        </div>        
        <FollowListModal isOpen={followingModalIsOpen} onRequestClose={closeFollowingModal} followings={props.followings}/>
        <FollowListModal isOpen={followerModalIsOpen} onRequestClose={closeFollowerModal} followings={props.followers}/>
    </>
  );
}

export default ProfileUpper;