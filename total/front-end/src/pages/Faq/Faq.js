import React, { useState, useEffect } from "react";
import axios from "axios";
import FaqType from "./FaqType";
import "./Faq.css";

function Faq() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/faq`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div id="faq-container">
      <div id="type">
        <FaqType dbData={data} />
      </div>
      <div id="titleContent"></div>
    </div>
  );
}

export default Faq;
