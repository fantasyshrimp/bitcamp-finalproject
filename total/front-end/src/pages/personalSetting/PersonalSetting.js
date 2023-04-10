import React, { useState } from "react";
import ModifyProfile from "./ModifyProfile";
import PublicSetting from "./PublicSetting";

function PersonalSetting() {
  const [temp, setTemp] = useState(0);
  const menu = ["프로필 수정", "공개 설정", "알람 설정"];

  return (
    <div style={{display: "flex", height: "83vh", width: "100vw", minWidth: "800px"}}>
        
      <div style={{height: "100%", marginLeft: "5%",
        boxSizing: "border-box", borderRight: "solid 1px white",
        color: "white"
      }}>
        <div style={{height: "20%"}}></div>
        <div style={{width: "250px", marginRight: "5%"}}>
          <h2 style={{boxSizing: "border-box"}}>설정</h2>
          
          {menu.map((title, index) => {
            return (<div key={title + index} onClick={() => {setTemp(index)}}>{title}</div>);
          })}  
        </div>

      </div>
        
      <div style={{width: "90%", height: "100%"}}>
        {temp === 0 && <ModifyProfile title={"프로필 수정"}/>}
        {temp === 1 && <PublicSetting title={"공개 설정"}/>}
      </div>
    </div>
  );
}

export default PersonalSetting;
