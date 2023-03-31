import React from "react";
import { useNavigate } from 'react-router-dom';

function SmallProfile(props) {     
  const {no, imgUrl, nickname, height} = props;
  const imageSize = height * 0.8;
  
  const navigate = useNavigate();

  const moveProfile = () => {
    props.modalClose();
    navigate('/Profile', { state: { no: no } });
  };


  return (
    <div id="small-profile" onClick={moveProfile}
      style={{
      display: 'flex', alignItems: 'center',
      width: height*3, height: height,
      padding: height/20
      }}>

      <div className="small-profile-image"
        style={{
          backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' , backgroundPosition: 'center',
          width: imageSize,
          height: imageSize,      
          borderRadius: '50%'
          }}></div>
      <div className="small-profile-nickname" 
        style={{ marginLeft: height/5,
          fontSize: height/3, fontWeight: 'bold', color: 'white',
          alignSelf: 'center', marginTop: height / 10
          }}>
        <span>{nickname}</span>
      </div>
    </div>
  );
}

export default SmallProfile;