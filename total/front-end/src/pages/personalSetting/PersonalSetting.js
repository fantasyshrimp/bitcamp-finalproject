import React, { useState } from "react";
import SetTemp from "./SetTemp";

function PersonalSetting() {
  const [temp, setTemp] = useState(1);

  function testtest() {
    setTemp(temp * -1)
  }

  return (
    <div style={{display: "flex", height: "83vh", width: "100vw", minWidth: "800px"}}>
        
      <div style={{width: "10%", height: "100%", 
        boxSizing: "border-box", borderRight: "solid 1px white",
        color: "white"
      }}>
        <div style={{height: "10%"}}></div>
        <div style={{marginLeft: "10%", marginRight: "5%"}}>
          <h5 style={{boxSizing: "border-box", borderBottom: "solid 1px white"}}>설정</h5>
          <div onClick={testtest}>메뉴1</div>



        </div>

      </div>
        
      <div style={{width: "90%", height: "100%"}}>
        {temp === -1 && <SetTemp title={"제목위치"}/>}

      </div>
    </div>
  );
}

export default PersonalSetting;