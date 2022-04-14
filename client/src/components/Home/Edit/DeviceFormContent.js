import React from "react";

const DeviceFormContent = () => {
  return (
    <>
      <label htmlFor="devices">Choose a device:</label>
      <select id="devices" name="devices" defaultValue={"none"}>
        <option value="none" disabled hidden>
          Select an Option
        </option>
        <option value="temp-sensor">Temperature Sensor</option>
        <option value="humidity-sensor">Humidity Sensor</option>
        <option value="heat-fan">Heating Fan</option>
        <option value="cool-fan">Cooling Fan</option>
      </select>
      <label htmlFor="device-name">Name your device:</label>
      <input
        type={"text"}
        id={"device-name"}
        name="name"
        placeholder="device/sensor 1"
      ></input>
    </>
  );
};

export default DeviceFormContent;
