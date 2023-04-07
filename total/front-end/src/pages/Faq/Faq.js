// Faq.js
import React, { useState } from "react";
import FaqType from "./FaqType";
import FaqTitleContent from "./FaqTitleContent";
import "./Faq.css";

function Faq() {
  const [selectedType, setSelectedType] = useState(null);

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
        <br />

        <FaqType onTypeSelected={setSelectedType} />
      </div>
      <div id="titleContent">
        <FaqTitleContent selectedType={selectedType} />
      </div>
    </div>
  );
}

export default Faq;

// import React, { useState } from "react";
// import FaqType from "./FaqType";
// import FaqTitleContent from "./FaqTitleContent";
// import "./Faq.css";

// function Faq() {
//   const [type, setType] = useState(true);

//   function temp() {
//     setType(!type);
//   }

//   return (
//     <div id="faq-container">
//       <div id="type">
//         <h2
//           style={{
//             color: "var(--color4)",
//             paddingTop: "60%",
//           }}
//         >
//           고객센터
//         </h2>
//         <br />

//         <FaqType />
//       </div>
//       <div id="titleContent">
//         <FaqTitleContent />
//       </div>
//     </div>
//   );
// }

// export default Faq;
