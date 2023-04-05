import React from "react";
import axios from "axios";
import SettingPrompt from "./SettingPrompt"

function SetTemp(props) {
  axios
  .get("http://localhost:8080/publicSetting")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
  });




  return (
    <div id="setting-feild" style={{ width: "90%", height: "100%",
      color: "white"  
    }}>

      <div style={{ width:"200px", marginLeft: "5%", marginTop: "5%",
        boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.5)"
      }}>{props.title}</div>
      
      <div style={{width: "90%", height: "100%",
        display: "flex", justifyContent: "center"
      }}>
        <div style={{}}>
          <SettingPrompt stateArray={[1,2,3]} />
          <SettingPrompt stateArray={[1,2]} />
          <SettingPrompt stateArray={[1,2]} />
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>
          <div>여기엔 무언가</div>

        </div>
      </div>
    </div>
  );
}

export default SetTemp;
