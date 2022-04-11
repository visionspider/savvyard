import React, { useState } from "react";
import styled from "styled-components";
// onClick={(ev) => {ev.currentTarget.value}}
const Devices = ({ device }) => {
  const [editDevice, setEditDevice] = useState(false);
  const handleChange = (e) => {
    const min = document.getElementById("input_min_temperature").value;
    const max = document.getElementById("input_max_temperature").value;
    if (min <= max) {
      device.min = e.target.value;
    } else if (max >= min) {
      device.max = e.target.value;
      console.log(device.max);
    }
  };

  return (
    <Wrapper>
      <DeviceContainer value={device.id} onClick={() => setEditDevice(true)}>
        {device.name}
        <br></br> {device.reading}
      </DeviceContainer>
      {editDevice ? (
        <Form onSubmit={(ev) => ev.preventDefault()}>
          <input></input>
          <label>
            <span>Min Temperature</span>
            <input
              type="range"
              min="-20"
              max="50"
              value={device.min}
              id="input_min_temperature"
              step="0.5"
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Max Temperature</span>
            <input
              type="range"
              min="-20"
              max="50"
              value={device.max}
              id="input_max_temperature"
              step="0.5"
              onChange={handleChange}
            />
          </label>
          <div style={{ display: "flex", gap: "20px" }}>
            <button
              onClick={() => {
                setEditDevice(false);
              }}
              className="cancel"
            >
              CANCEL
            </button>
            <button
              type="submit"
              onClick={() => {
                setEditDevice(false);
              }}
            >
              SAVE
            </button>
          </div>
        </Form>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1%;

  /* & {
    h2 {
      color: green;
      background-color: #c2fbd7;
      text-decoration: none;
    }
  } */
`;

const DeviceContainer = styled.button``;

const Form = styled.form`
  margin-top: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export default Devices;
