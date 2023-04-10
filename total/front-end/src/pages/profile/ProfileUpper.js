import React, { useState } from "react";
import axios from "axios";

import "./ProfileUpper.css";
import FollowBtn from "./FollowBtn";
import FollowListModal from "./FollowListModal";

function ProfileUpper(props) {
  const { followingCnt, followerCnt } = props;
  const [followingList, setFollowingList] = useState([]);
  const [followingModalIsOpen, setFollowingModalIsOpen] = useState(false);
  const [point, setPoint] = useState();
  const openFollowingModal = () => {
    axios
      .get("http://localhost:8080/follow/" + props.member.no)
      .then((response) => {
        setFollowingList(response.data.data);
        if (response.data.data.length > 0) {
          setFollowingModalIsOpen(true);
        }
      });
  };
  const closeFollowingModal = () => {
    setFollowingModalIsOpen(false);
  };

  const [followerModalIsOpen, setFollowerModalIsOpen] = useState(false);
  const openFollowerModal = () => {
    setFollowerModalIsOpen(true);
  };
  const closeFollowerModal = () => {
    setFollowerModalIsOpen(false);
  };
  const count = 100;

  axios
    .get("http://localhost:8080/point/" + props.member.no)
    .then((response) => {
      setPoint(response.data);
    });

  return (
    <>
      <div id="profileUpper">
        <div
          className="profile-image"
          style={{
            width: "100px",
            height: "100px",
            backgroundImage: `url(${props.member.profilePhoto})`,
            backgroundSize: "cover",
          }}
        ></div>
        <div className="profile-info">
          <div className="profile-name">{props.member.nickname}</div>
          <div className="profile-detail">
            <div onClick={openFollowingModal}>
              <span>{followingCnt}</span> followings
            </div>
            <div onClick={openFollowerModal}>
              <span>{followerCnt}</span> followers
            </div>
            <div>
              <span>{count}</span> likes
            </div>
            <div>
              <span>{point}</span>
              <span></span> point
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "35px",
          }}
        >
          <FollowBtn followerNo={props.member.no} />
        </div>
      </div>
      <FollowListModal
        isOpen={followingModalIsOpen}
        onRequestClose={closeFollowingModal}
        follows={followingList}
      />
      <FollowListModal
        isOpen={followerModalIsOpen}
        onRequestClose={closeFollowerModal}
        follows={props.followers}
      />
    </>
  );
}

export default ProfileUpper;
