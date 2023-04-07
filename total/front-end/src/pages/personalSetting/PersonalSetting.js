import React, { useState } from "react";
import ModifyProfile from "./ModifyProfile";
import PublicSetting from "./PublicSetting";

function PersonalSetting() {
  const [temp, setTemp] = useState(1);

  return (
    <div style={{display: "flex", height: "83vh", width: "100vw", minWidth: "800px"}}>
        
      <div style={{height: "100%", marginLeft: "5%",
        boxSizing: "border-box", borderRight: "solid 1px white",
        color: "white"
      }}>
        <div style={{height: "20%"}}></div>
        <div style={{width: "250px", marginRight: "5%"}}>
          <h2 style={{boxSizing: "border-box"}}>설정</h2>
          <div onClick={() => {setTemp(1);}}>프로필 수정</div>
          <div onClick={() => {setTemp(2);}}>공개 설정</div>


        </div>

      </div>
        
      <div style={{width: "90%", height: "100%"}}>
        {temp === 1 && <ModifyProfile title={"프로필 수정"}/>}
        {temp === 2 && <PublicSetting title={"공개 설정"}/>}
      </div>
    </div>
  );
}

export default PersonalSetting;
