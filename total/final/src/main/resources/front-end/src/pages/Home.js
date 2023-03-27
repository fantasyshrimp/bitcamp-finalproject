import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [hello, setHello] = useState("");
  
    useEffect(() => {
      axios
        .get("http://localhost:8080/api/hello")
        .then((response) => setHello(response.data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <div id="body">
        <div id="body-sub">
          <p id="big-font">{hello}</p>
          <div id="start-btn">Start ☜</div>
        </div>
      </div>
    );
  }

export default Home;