import React from "react";

const HumidityFormContent = ({ device, handleChange }) => {
  return (
    <>
      <input></input>
      <label>
        <span>Min Humidity ({device.min})</span>
        <input
          type="range"
          min="0"
          max="100"
          value={device.min}
          id="input_min"
          step="0.5"
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Max Humidity ({device.max})</span>
        <input
          type="range"
          min="0"
          max="100"
          value={device.max}
          id="input_max"
          step="0.5"
          onChange={handleChange}
        />
      </label>
    </>
  );
};

export default HumidityFormContent;
