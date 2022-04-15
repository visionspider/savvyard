import React from "react";

const TempFormContent = ({ device, handleChange }) => {
  return (
    <>
      <input></input>
      <label>
        <span>Min Temperature ({device.min})</span>
        <input
          type="range"
          min="-20"
          max={device.max}
          value={device.min}
          id="input_min"
          step="0.5"
          onChange={(ev) => handleChange(ev, "sensor")}
          style={{ minWidth: "90%" }}
        />
      </label>

      <label>
        <span>Max Temperature ({device.max})</span>
        <input
          type="range"
          min={device.min}
          max="50"
          value={device.max}
          id="input_max"
          step="0.5"
          onChange={(ev) => handleChange(ev, "sensor")}
          style={{ minWidth: "90%" }}
        />
      </label>
    </>
  );
};

export default TempFormContent;
