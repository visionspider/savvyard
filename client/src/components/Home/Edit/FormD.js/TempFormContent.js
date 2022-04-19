import React, { useContext } from "react";
import { CurrentUserContext } from "../../../Context/CurrentUserContext";

const TempFormContent = ({ device, handleChange }) => {
  const { unitChange } = useContext(CurrentUserContext);
  const calcFahrenheit = (num) => {
    //Equations °F = (°C × 9/5) + 32 //°C = (°F − 32) x 5/9
    return (+num * 9) / 5 + 32;
  };
  return (
    <>
      <label>
        <span>
          Min Temperature (
          {unitChange ? +calcFahrenheit(device.min).toFixed(2) : device.min})
        </span>
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
        <span>
          Max Temperature (
          {unitChange ? +calcFahrenheit(device.max).toFixed(2) : device.max})
        </span>
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
