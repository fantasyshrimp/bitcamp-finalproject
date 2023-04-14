import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AlarmInfo from "./AlarmInfo";

function PersonalAlarms() {
    const navigate = useNavigate();
    const [alarms, setAlarms] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/alarm")
        .then((response) => {
            if (response.data.status === "failure") {
                navigate("/");
              }
            setAlarms(response.data);
        })
    }, [navigate])
   
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
            <AlarmInfo key={alarm.log.logNo} data={alarm} receiver={alarms.receiver}/>
            );
          })}
        </div>
      </div>
    </div>
);
}

export default PersonalAlarms;