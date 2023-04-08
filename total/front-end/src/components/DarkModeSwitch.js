import React from "react";
import "./DarkModeSwitch.css";

function DarkModeSwitch() {
  return (
    <>
      <div className="d-flex align-items-center me-3">
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </>
  );
}

export default DarkModeSwitch;
