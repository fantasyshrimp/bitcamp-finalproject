import React from "react";

function SettingRadio(props) {
  const {title, options, value, setValue} = props;

  return (
    <div>
      <h5>{title}</h5>
      <div style={{ display: 'flex', marginBottom: "10px" }}>
      {options.map((option, index) => {
        return (
        <label key={index} style={{ margin: "10px", fontSize: "1.2rem" }}>
          <input type="radio" name="option" value={index} checked={value === index} onChange={() => setValue(index)} />
          {option}
        </label>
        );
      })}
      </div>
    </div>
  );
}

export default SettingRadio;



