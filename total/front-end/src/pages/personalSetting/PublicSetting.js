import React, {useState, useEffect} from "react";
import axios from "axios";
import SettingPrompt from "./SettingPrompt"

function SetTemp(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/publicSetting")
      .then((response) => {
        setData(response.data);
      });
  }, []);

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
        <div style={{marginTop:"3%"}}>
        {data.length > 0 && data.map((settingList) => (
          <SettingPrompt key={settingList.typeNo} 
          classKey={settingList.typeNo} data={settingList}
          settingType={"publicSetting"} stateArray={[1,2,3]} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default SetTemp;
