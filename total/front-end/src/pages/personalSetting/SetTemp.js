import React from "react";

function SetTemp(props) {
  return (
    <div id="setting-feild" style={{ width: "100%", height: "100%",
      color: "white"  
    }}>

      <div style={{ width:"200px", marginLeft: "5%", marginTop: "5%",
        boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.5)"
      }}>{props.title}</div>
      
      <div style={{width: "100%", height: "100%",
        display: "flex", justifyContent: "center"
      }}>
        <div style={{}}>
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
