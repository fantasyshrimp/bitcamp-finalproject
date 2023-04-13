import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ModifyProfile from "./ModifyProfile";
import PublicSetting from "./PublicSetting";
import AlamSetting from "./AlamSetting";
import PersonalAlarms from "./PersonalAlarms";

function PersonalSetting() {
  const location = useLocation();

  const [menuNo, setMenuNo] = useState(location.state ? location.state.menuNo : 0);
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
            return (<div key={title + index} onClick={() => {setMenuNo(index)}}>{title}</div>);
          })}  
        </div>

      </div>
        
      <div style={{width: "90%", height: "100%"}}>
        {menuNo === 0 && <ModifyProfile title={menu[0]}/>}
        {menuNo === 1 && <PublicSetting title={menu[1]}/>}
        {menuNo === 2 && <AlamSetting title={menu[2]}/>}
        {menuNo === 3 && <PersonalAlarms title={menu[3]}/>}
      </div>
    </div>
  );
}

export default PersonalSetting;
