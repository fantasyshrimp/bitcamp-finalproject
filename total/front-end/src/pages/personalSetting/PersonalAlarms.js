import React, {useEffect, useState} from "react";
import axios from "axios";
import TempAlarmData from "./TempAlarmData";

function PersonalAlarms() {
    const [alarms, setAlarms] = useState([]);
    useEffect(() => {
        axios.post("http://localhost:8080/alarm/test/1")
        .then((response) => {
            setAlarms(response.data);
        })
    }, [])
    


    return(
    <div>알람페이지
    {alarms.map((alarm)=> (
        <TempAlarmData data={alarm}/>
    ))}



    </div>);
}

export default PersonalAlarms;