import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

function FaqType() {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/faqType`)
      .then((response) => {
        setDbData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (dbData !== []) {
    console.log(dbData);
    return (
      <Accordion defaultActiveKey="0" flush>
        {dbData.map((data, index) => (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{data.faqType}</Accordion.Header>
            {/* <Accordion.Body>{data.body}</Accordion.Body> */}
          </Accordion.Item>
        ))}
      </Accordion>
    );
  }
}

export default FaqType;

// import React from "react";
// import Accordion from "react-bootstrap/Accordion";

// function FaqType(props) {
//   const { dbData } = props;

//   if (dbData !== []) {
//     // console.log(dbData[0].faqType);
//     return (
//       <Accordion
//         style={
//           {
//             //   paddingTop: "40%",
//             //   width: "100%",
//             //   border: "none",
//             //   backgroundColor: "transparent",
//           }
//         }
//         defaultActiveKey="0"
//         flush
//       >
//         {dbData.map((data, index) => (
//           <Accordion.Item key={index} eventKey={index.toString()}>
//             <Accordion.Header>{data.faqType}</Accordion.Header>
//             {/* <Accordion.Body>{data.body}</Accordion.Body> */}
//           </Accordion.Item>
//         ))}
//       </Accordion>
//     );
//   }
// }

// export default FaqType;
