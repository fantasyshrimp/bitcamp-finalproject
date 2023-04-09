import React, {useState, useEffect} from "react";
import axios from "axios";

function SettingInput(props) {
  return (
    <div>
      <h5>{props.title}</h5>
      <input placeholder={props.placeholder}
        style={{ width:"50%", marginBottom: "10px",
        backgroundColor: "#212529",
        border: "1px solid #ced4da",
        borderRadius: "0.375rem",
        padding: "0.375rem 0.75rem",
        color: "rgb(248,249,250)",
        fontSize: "1rem",
        fontWeight: "400"
        }}></input>
    </div>
  );
}

export default SettingInput;



