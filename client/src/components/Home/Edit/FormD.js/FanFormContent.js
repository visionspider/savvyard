import React, { Fragment } from "react";
import styled from "styled-components";

const FanFormContent = ({ device, handleChange, getSensor }) => {
  const relatedSensors = getSensor(device.relation);
  return (
    <>
      <label>
        {" "}
        Select the sensor to listen:
        <select
          id="input_sensor"
          name="sensors"
          defaultValue={"none"}
          onChange={(ev) => handleChange(ev, "fan")}
        >
          <option value="none" disabled hidden>
            Select an Option
          </option>
          {relatedSensors.map((device) => (
            <option key={device.id} value={device.id}>
              {device.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Toggle OFF / ON:{" "}
        <input
          type="button"
          className={`switch ${device.switch && "active"}`}
          onClick={(ev) => handleChange(ev, "fan", true)}
          value={device.switch}
          title="Toggle me"
          id="input_switch"
        />
      </label>
    </>
  );
};

export default FanFormContent;
