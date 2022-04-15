import React from "react";

const HumidityFormContent = ({ device, handleChange }) => {
  return (
    <>
      <input></input>
      <label>
        <span>Min Humidity ({device.min})</span>
        <br></br>
        <input
          type="range"
          min="0"
          max={device.max}
          value={device.min}
          id="input_min"
          step="0.5"
          onChange={(ev) => handleChange(ev, "sensor")}
          style={{ minWidth: "90%" }}
        />
      </label>

      <label>
        <span>Max Humidity ({device.max})</span>
        <input
          type="range"
          min={device.min}
          max="100"
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

export default HumidityFormContent;
