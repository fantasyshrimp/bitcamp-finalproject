import React, { useEffect, useState } from "react";
import "./DarkModeSwitch.css";

function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setMode = () => {
    const newMode = !isDarkMode;
    localStorage.setItem("mode", newMode ? "light" : "dark");
    setIsDarkMode(newMode);
  };

  const handleInputChange = () => {
    setMode();
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    setIsDarkMode(savedMode === "light");
  }, []);

  return (
    <>
      <div className="d-flex align-items-center me-3">
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
