import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TempAlarmData from "./TempAlarmData";

function PersonalAlarms() {
    const navigate = useNavigate();
    const [alarms, setAlarms] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/alarm/test/1")
        .then((response) => {
          console.log(response);
            if (response.data.status === "failure") {
                navigate("/");
              }
            setAlarms(response.data); //컨트롤러에서 한번에 받아오는데 로그인유저정보를 따로 빼야할수도
        })
    }, [])
    


    return(
    <div id="setting-feild" style={{ width: "100%", height: "100%", overflowY: "auto",
      color: "white"  
    }}>

      <div style={{ width:"250px", marginLeft: "5%", marginTop: "5%",
        boxSizing: "border-box", borderBottom: "1px solid rgba(255,255,255,0.5)"
      }}>전체 알람</div>
      
      <div style={{width: "100%", height: "100%",
        display: "flex"
      }}>
        <div style={{marginTop:"3%"}}>
        {alarms.logData && alarms.logData.map((alarm)=> {
          return (
            <TempAlarmData key={alarm.log.logNo} data={alarm} receiver={alarms.receiver}/>
            );
          })}
        </div>
      </div>
    </div>
);
}

export default PersonalAlarms;