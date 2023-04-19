import React, { useEffect, useState } from "react";
import "./DarkModeSwitch.css";

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const root = document.querySelector(":root");

  const setMode = () => {
    const newMode = !isDarkMode;
    localStorage.setItem("dark-light-mode", newMode ? "light" : "dark");
    setIsDarkMode(newMode);
  };

  useEffect(() => {
    if (isDarkMode === true) {
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
  }, [isDarkMode]);

  const handleInputChange = () => {
    setMode();
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("dark-light-mode");
    setIsDarkMode(savedMode === "light");
  }, []);

  return (
    <>
      <div className="d-flex align-items-center ms-2 me-2">
        <label className="switch">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleInputChange}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
}

export default DarkModeSwitch;
