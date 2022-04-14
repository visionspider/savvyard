import React from "react";
import styled from "styled-components";
import FanFormContent from "./FanFormContent";
import HumidityFormContent from "./HumidityFormContent";
import TempFormContent from "./TempFormContent";

const FormD = ({ device, setEditDevice }) => {
  const handleChange = (e) => {
    const min = document.getElementById("input_min").value;
    const max = document.getElementById("input_max").value;
    if (min <= max) {
      device.min = e.target.value;
    } else if (max >= min) {
      device.max = e.target.value;
      console.log(device.max);
    }
  };
  return (
    <Form onSubmit={(ev) => ev.preventDefault()}>
      {device.type === "humidity-sensor" ? (
        <HumidityFormContent device={device} handleChange={handleChange} />
      ) : device.type === "temp-sensor" ? (
        <TempFormContent device={device} handleChange={handleChange} />
      ) : device.type.includes("fan") ? (
        <FanFormContent device={device} handleChange={handleChange} />
      ) : (
        <></>
      )}
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
  );
};

const Form = styled.form`
  margin: 20px;
  padding: 2%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 8px 0px darkgray;
  box-shadow: 0px 0px 8px 0px darkgray;
  border-radius: 20px;
`;
export default FormD;
