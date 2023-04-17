import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="d-flex justify-content-center" style={{backgroundColor: `var(--aim-base-tone)`}}>
      <div
        className="text-light d-flex align-items-center"
        style={{ height: "100px" }}
      >
        created by Someone
      </div>
    </div>
  );
}

export default Footer;
