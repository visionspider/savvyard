import React, { useState } from "react";
import styled from "styled-components";
import Delete from "../Edit/Delete";
import FormD from "../Edit/FormD.js";
// onClick={(ev) => {ev.currentTarget.value}}
const Devices = ({ device, edit }) => {
  const [editDevice, setEditDevice] = useState(false);

  return (
    <Wrapper>
      {edit && <Delete id={device.id} type={"device"} />}

      <DeviceContainer value={device.id} onClick={() => setEditDevice(true)}>
        {device.name}
        <br></br> {device.reading}
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

const DeviceContainer = styled.button``;

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
