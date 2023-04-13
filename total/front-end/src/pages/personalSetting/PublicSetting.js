import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SettingPrompt from "./SettingPrompt"

function PublicSetting(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/publicSetting")
      .then((response) => {
        if (response.data.status === "failure") {
          navigate("/");
        }
        setData(response.data);
      });
  }, []);

  return (
    <div id="setting-feild" style={{ width: "100%", height: "100%",
      color: "white"  
    }}>

      <div style={{ width:"250px", marginLeft: "5%", marginTop: "5%",
        boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.5)"
      }}>{props.title}</div>
      
      <div style={{width: "100%", height: "100%",
        display: "flex", justifyContent: "center"
      }}>
        <div style={{marginTop:"3%"}}>
        {data.length > 0 && data.map((settingList) => (
          <SettingPrompt key={settingList.typeNo} 
          classKey={settingList.typeNo} 
          data={{typeNo: settingList.typeNo,
            title: settingList.title, 
            description: settingList.description, 
            rangeState: settingList.rangeState,
            memberNo: settingList.memberNo}}
          settingType={"publicSetting"} requestBody={{ typeNo: "", rangeNo: ""}} stateArray={[1,2]} />
        ))}
        </div>
      </div>
    </div>
  );
}

export default PublicSetting;
