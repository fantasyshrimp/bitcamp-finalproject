import React, { useEffect, useState } from "react";
import axios from "axios";

function Report(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/report`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));

    console.log(data);
  }, []);

  return (
    <>
      <div
        id="modal-background"
        style={{
          opacity: 0.3,
          backgroundColor: "black",
          pointerEvents: "all",
          cursor: "Default",
        }}
        onClick={props.handleCloseModal}
      ></div>
      <div id="report-main">
        <div id="report-title">
          <span id="report-close" onClick={props.handleCloseModal}>
            &times;
          </span>
          신고
        </div>
        <div id="report-contentbox">
          {data.map((item) => (
            <>
              <div id="report-menu" key={item.reportType}>
                {item.reportType}
                <div
                  id="report-menuicon"
                  style={{
                    backgroundImage: `url(/next.png)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Report;
