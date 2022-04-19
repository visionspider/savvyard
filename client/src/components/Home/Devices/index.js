import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import Delete from "../Edit/Delete";
import FormD from "../Edit/FormD.js";
// onClick={(ev) => {ev.currentTarget.value}}
const Devices = ({ device, edit }) => {
  const { unitChange } = useContext(CurrentUserContext);
  const [editDevice, setEditDevice] = useState(false);

  const calcFahrenheit = (num) => {
    //Equations °F = (°C × 9/5) + 32 //°C = (°F − 32) x 5/9
    return (+num * 9) / 5 + 32;
  };
  //add an absolute position for delete icon and add icon
  return (
    <Wrapper>
      {edit && (
        <span className="delete">
          {" "}
          <Delete id={device.id} type={"device"} />
        </span>
      )}

      <DeviceContainer value={device.id} onClick={() => setEditDevice(true)}>
        {device.name}
        <br></br>{" "}
        {device.unit === "%" ? (
          <p>
            {device.reading} {device.unit}
          </p>
        ) : device.unit === "°C" ? (
          unitChange ? (
            <p>{calcFahrenheit(device.reading)?.toFixed(2)} °F</p>
          ) : (
            <p>
              {(+device.reading).toFixed(2)} {device.unit}
            </p>
          )
        ) : (
          <></>
        )}
      </DeviceContainer>
      {editDevice ? (
        <FormD device={device} setEditDevice={setEditDevice} />
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1%;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

const DeviceContainer = styled.button`
  p {
    font-weight: bolder;
    color: darkgreen;
    /* color: rgba(0, 0, 0, 0.6); */

    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
  }
`;

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

export default Devices;
