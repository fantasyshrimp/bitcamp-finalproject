import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import axios from "axios";

function FaqTitleContent(props) {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/faqTitleContent`)
      // .get(`http://localhost:8080/faqTitleContent?faqTypeNo=${props.faqTypeNo}`)
      .then((response) => {
        setDbData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (dbData !== []) {
    console.log(dbData);
    if (dbData && dbData.length > 0) {
      return (
        <Accordion
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "transparent",
          }}
          defaultActiveKey="0"
          flush
        >
          {dbData.map((data, index) => (
            <Accordion.Item
              style={{
                color: "white",
                backgroundColor: "transparent",
              }}
              key={index}
              eventKey={index.toString()}
            >
              <Accordion.Header>{data.title}</Accordion.Header>
              <Accordion.Body
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
            </Accordion.Item>
          ))}
        </Accordion>
      );
    }
  }

  return null;
}

export default FaqTitleContent;

// import React from "react";
// import Accordion from "react-bootstrap/Accordion";

// function FaqTitleContent(props) {
//   const { dbData } = props;
//   console.log(dbData.faqTypeNo);

//   if (dbData && dbData.length > 0) {
//     return (
//       <Accordion
//         // style={{
//         //   paddingTop: "40%",
//         //   width: "100%",
//         //   border: "none",
//         //   backgroundColor: "transparent",
//         // }}
//         defaultActiveKey="0"
//         flush
//       >
//         {dbData.map((data, index) => (
//           <Accordion.Item key={index} eventKey={index.toString()}>
//             <Accordion.Header>{data.title}</Accordion.Header>
//             <Accordion.Body>{data.content}</Accordion.Body>
//           </Accordion.Item>
//         ))}
//       </Accordion>
//     );
//   }

//   // 데이터가 없을 경우 null을 반환합니다.
//   return null;
// }

// // import React from "react";
// // import Accordion from "react-bootstrap/Accordion";

// // function FaqTitleContent(props) {
// //   const { dbData } = props;

// //   if (dbData !== []) {
// //     console.log(dbData[0].faqType);
// //     return (
// //       <Accordion
// //         // style={{
// //         //   paddingTop: "40%",
// //         //   width: "100%",
// //         //   border: "none",
// //         //   backgroundColor: "transparent",
// //         // }}
// //         defaultActiveKey="0"
// //         flush
// //       >
// //         {dbData.map((data, index) => (
// //           <Accordion.Item key={index} eventKey={index.toString()}>
// //             <Accordion.Header>{data.title}</Accordion.Header>
// //             <Accordion.Body>{data.content}</Accordion.Body>
// //           </Accordion.Item>
// //         ))}
// //       </Accordion>
// //     );
// //   }
// // }

// export default FaqTitleContent;
