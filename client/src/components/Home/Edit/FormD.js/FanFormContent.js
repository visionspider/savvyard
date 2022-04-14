import React from "react";
import Devices from "../../Devices";

const FanFormContent = ({ device, handleChange }) => {
  return (
    <>
      <input></input>
      <label>
        <span>Switch:</span>
        <input
          type="radio"
          value={"off"}
          id="input_min"
          onChange={handleChange}
        />
        OFF
      </label>

      <label>
        <input
          type="radio"
          value={"on"}
          id="input_max"
          onChange={handleChange}
        />
        ON
      </label>
    </>
  );
};

export default FanFormContent;
