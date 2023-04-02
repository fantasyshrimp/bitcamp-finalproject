import React, { useState, useEffect } from "react";
import axios from "axios";

function FollowBtn(props) {
    const [followState, setfollowState] = useState(false);
    const [isShow, setIsShow] = useState(true);

    useEffect(() => {
      axios.get("http://localhost:8080/follow/" + props.followerNo)
      .then((response) => {       
        console.log(props.followerNo +"번이랑 팔로우하나?") ;
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
      .catch((error) => {
        console.error(error);
      });
    }, [props.followerNo]);

    const handleFollow = () => {
        setfollowState(!followState);

        if (followState) {
            axios.delete("http://localhost:8080/follow/" + props.followerNo)
            .then((response) => {
              //console.log(response);
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
            axios.post("http://localhost:8080/follow", {
              followingNo: props.followingNo,
              followerNo: props.followerNo
            })
            .then((response) => {
              //console.log(response);
            })
            .catch((error) => {
              console.error(error);
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
          backgroundColor: followState ? "cadetblue" : "white",
          Color: followState ? "white" : "black",
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