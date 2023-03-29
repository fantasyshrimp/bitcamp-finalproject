import React from "react";
import "./ProfileUpper.css";

function ProfileUpper(props) {
    return (
    <div className="ProfileUpper row">
        <div className="ProfileUpper col">
            <div className="profile-image">{props.member.profilePhoto}</div>
        </div>
        <div className="ProfileUpper col">
            <div className="nickname"><span>{props.member.nickname}</span></div>
            <div className="info">
                <ul>
                    <li>followers {}</li>
                    <li>following {}</li>
                    <li>likes {}</li>
                </ul>
            </div>
        </div>
        <div className="ProfileUpper col">col3</div>
        <div className="ProfileUpper col">col4</div>
        <div className="ProfileUpper col">col5</div>
        <div className="ProfileUpper col">col6</div>
    </div>
  );
}

export default ProfileUpper;