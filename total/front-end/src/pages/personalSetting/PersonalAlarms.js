import React, {useEffect, useState} from "react";
import axios from "axios";
import TempAlarmData from "./TempAlarmData";

function PersonalAlarms() {
    const [alarms, setAlarms] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/alarm/test/1")
        .then((response) => {
            setAlarms(response.data); //컨트롤러에서 한번에 받아오는데 로그인유저정보를 따로 빼야할수도
        })
    }, [])
    


    return(
    <div style={{height: "100%", overflowY: "auto"}}>알람페이지
    {alarms.map((alarm)=> {
    return (
      <TempAlarmData key={alarm.log.logNo} data={alarm}/>
      );
    })}



    </div>);
}

export default PersonalAlarms;