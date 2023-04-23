import React, { useEffect, useState } from "react";
import "./DarkModeSwitch.css";

function DarkModeSwitch(props) {
  const root = document.querySelector(":root");

  useEffect(() => {
    if (props.isLightMode) {
      root.style.setProperty("--aim-base-tone", `#8C8C8C`);
      root.style.setProperty("--aim-base-tone-up", `#D9D9D9`);
      root.style.setProperty("--aim-base-tone-down", `#F2F2F2`);
      root.style.setProperty("--aim-base-tone-sub", `#594A4A`);

      root.style.setProperty("--aim-border", `#595959`);

      root.style.setProperty("--aim-text-default", `#0D0D0D`);
      root.style.setProperty("--aim-text-sub", `#0D0D0Dcc`);
    } else {
      root.style.setProperty("--aim-base-tone", `#262626`);
      root.style.setProperty("--aim-base-tone-up", `#595959`);
      root.style.setProperty("--aim-base-tone-down", `#0D0D0D`);
      root.style.setProperty("--aim-base-tone-sub", `#737373`);

      root.style.setProperty("--aim-border", `#A6A6A6`);

      root.style.setProperty("--aim-text-default", `white`);
      root.style.setProperty("--aim-text-sub", `gray`);
    }
  }, [props.isLightMode]);

  const handleChange = () => {
    const newMode = !props.isLightMode;
    props.setIsLightMode(newMode);
    localStorage.setItem("isLightMode", JSON.stringify(newMode));
  };

  return (
    <>
      <div className="d-flex align-items-center ms-2 me-2">
        <label className="switch">
          <input
            type="checkbox"
            checked={props.isLightMode}
            onChange={handleChange}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
}

export default DarkModeSwitch;
