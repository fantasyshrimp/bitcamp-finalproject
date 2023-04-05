import React, { useState } from "react";
import FaqType from "./FaqType";
import FaqTitleContent from "./FaqTitleContent";
import "./Faq.css";

function Faq() {
  const [type, setType] = useState(true);

  function temp() {
    setType(!type);
  }

  return (
    <div id="faq-container">
      <div id="type">
        <h2
          style={{
            color: "var(--color4)",
            paddingTop: "60%",
          }}
        >
          고객센터
        </h2>

        <FaqType />
      </div>
      <div id="titleContent">
        <FaqTitleContent />
      </div>
    </div>
  );
}

export default Faq;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import FaqType from "./FaqType";
// import FaqTitleContent from "./FaqTitleContent";
// import "./Faq.css";

// function Faq() {
//   const [data, setData] = useState([]);
//   const [type, setType] = useState(true);
//   function temp() {
//     setType(!type);
//   }

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8080/faq`)
//       .then((response) => {
//         setData(response.data);
//         console.log(response.data);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div id="faq-container">
//       <div id="type" onClick={temp}>
//         {type && (
//           <h2
//             style={{
//               color: "var(--color4)",
//               paddingTop: "60%",
//             }}
//           >
//             고객센터
//           </h2>
//         )}
//         <FaqType dbData={data} />
//       </div>
//       <div id="titleContent">
//         <FaqTitleContent dbData={data} />
//       </div>
//     </div>
//   );
// }

// export default Faq;
