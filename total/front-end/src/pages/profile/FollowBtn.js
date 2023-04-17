import React, { useState, useEffect } from "react";
import axios from "axios";

function FollowBtn(props) {
    const [followState, setfollowState] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
      axios.get("http://localhost:8080/follow/check/" + props.followerNo)
      .then((response) => {       
        if (response.data.data === "follow") {
          setfollowState(true);
        } else {
          setfollowState(false);
        }
        if (response.data.data === "own") {
          setIsShow(false);
        } else {
          setIsShow(true);
        }
      })
    }, [props.followerNo]);

    const handleFollow = () => {
        setfollowState(!followState);

        if (followState) {
            axios.delete("http://localhost:8080/follow/" + props.followerNo);
        } else {
            axios.post("http://localhost:8080/follow", {
              followingNo: props.followingNo,
              followerNo: props.followerNo
            });
        }
    };

    return (
      <>{isShow && (
      <div 
        style={{
          flexShrink: "0",
          width: "100px",
          height: "30px",
          backgroundColor: followState ? `var(--aim-base-tone-down)` : `var(--aim-base-tone-sub)`,
          Color: followState ? `var(--aim-text-default)` : `var(--aim-text-sub)`,
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "30px",
          borderRadius: "5px",
          cursor: "pointer"
        }}
        onClick={handleFollow}
      >{followState ? "Unfollow" : "Follow"}
      </div>
      )}</>
    );
}

export default FollowBtn;
