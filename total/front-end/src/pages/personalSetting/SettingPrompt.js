import React, {useState, useEffect} from "react";
import axios from "axios";
import "./SettingPrompt.css"

function SettingPrompt(props) {
  const {classKey, data, stateArray, settingType} = props;
  const [selectedValue, setSelectedValue] = useState(data.rangeState === 0 ? 1 : data.rangeState);
  const root = document.querySelector(':root');

  const controlClass = "selected-setting" + classKey
  useEffect(() => {
    document.querySelector(`.${controlClass}`).style.left = `${((data.rangeState === 0 ? 1:data.rangeState ) - 1) * 30}px`;
  }, []);

  const handleButtonClick = (target) => {
    const selectedNo = target.getAttribute("data-value");
    const moveValue = selectedNo - selectedValue;
    
    let movePx = 30 * parseInt(moveValue);
    root.style.setProperty('--slide-side-distance', `${movePx}px`);
    
    const selectedPosition = target.parentNode.querySelector(`.${controlClass}`);
    selectedPosition.classList.add("slide-side");

    setTimeout(()=> {
      selectedPosition.classList.remove("slide-side");
      selectedPosition.style.left = `${parseInt(getComputedStyle(selectedPosition).left.replace(/\D/g, "")) + movePx}px`;
    }, 200);

    //console.log(selectedValue + "에서" +selectedNo+ "으로이동");
    setSelectedValue(selectedNo);  //이거 왜이렇게 늦게들어감?
    //console.log(selectedValue);
    //요기서 패치
    data.memberNo === 0 ?
    axios.post(`http://localhost:8080/${settingType}`, {
      typeNo: data.typeNo,
      rangeNo: selectedNo
    }).then(()=>{console.log(selectedNo);
      console.log(selectedNo);}) :
    axios.put(`http://localhost:8080/${settingType}`, {
      typeNo: data.typeNo,
      rangeNo: selectedNo
    }).then(()=>{console.log(selectedNo);
      console.log(selectedNo);});
  };


  return (
    <div id="setting-prompt" style={{
      position: "relative", marginBottom: "10px",
      boxSizing: "border-box", borderBottom: "1px solid"
    }}>
      <div style={{width: "400px"}}>
        <div style={{fontSize: "x-large"}}><b>{data.title}</b></div>
        <div style={{fontSize: "small", color:"gray"}}>{data.description}</div>
      </div>

      <div id="setting-type-btn" style={{position: "absolute", top: "0", right: "0"}}>
        {stateArray.map((value) => (
          <div key={value} data-value={value} onClick={(event) => handleButtonClick(event.currentTarget)}></div>
        ))}
      <div className={controlClass}></div>
      </div>

    </div>
  );
}

export default SettingPrompt;
