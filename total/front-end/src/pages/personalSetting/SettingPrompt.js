import React, {useState} from "react";
import "./SettingPrompt.css"

function SettingPrompt(props) {
  const [selectedValue, setSelectedValue] = useState(1);
  const root = document.querySelector(':root');
  


  const handleButtonClick = (target) => {
    const selectedNo = target.getAttribute("data-value") - selectedValue;
    
    let movePx = 30 * parseInt(selectedNo);
    root.style.setProperty('--slide-side-distance', `${movePx}px`);
    

    const selectedPosition = target.parentNode.querySelector(".selected-setting");
    selectedPosition.classList.add("slide-side");

     setTimeout(()=> {
      selectedPosition.classList.remove("slide-side");
      selectedPosition.style.left = `${parseInt(getComputedStyle(selectedPosition).left.replace(/\D/g, "")) + movePx}px`;
     }, 200);

    setSelectedValue(target.getAttribute("data-value")); 
  };


  return (
    <div id="setting-prompt" style={{
      position: "relative", marginBottom: "10px",
      boxSizing: "border-box", borderBottom: "1px solid"
    }}>
      <div style={{width: "400px"}}>
        <div style={{fontSize: "x-large"}}><b>title</b></div>
        <div style={{fontSize: "small", color:"gray"}}>information</div>
      </div>

      <div id="setting-type-btn" style={{position: "absolute", top: "0", right: "0"}}>
        {props.stateArray.map((value) => (
          <div key={value} data-value={value} onClick={(event) => handleButtonClick(event.currentTarget)}></div>
        ))}
      <div className="selected-setting"></div>
      </div>
    </div>
  );
}

export default SettingPrompt;
