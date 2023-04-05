import React from "react";
import { useNavigate } from 'react-router-dom';

function SmallProfileName(props) {     
  const {no, nickname, height, modalClose} = props;
  
  const navigate = useNavigate();

  const moveProfile = () => {
    modalClose();
    navigate('/Profile', { state: { no: no } });
  };

  return (
    <div className="small-profile-nickname" onClick={moveProfile}
      style={{ marginLeft: height/5,
      fontSize: height/3, fontWeight: 'bold', color: 'white',
      alignSelf: 'center', marginTop: height / 10
      }}>
      <span>{nickname}</span>
    </div>
  );
}

export default SmallProfileName;