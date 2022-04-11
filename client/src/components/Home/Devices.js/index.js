import React from "react";
import styled from "styled-components";

const Devices = ({ device }) => {
  return (
    <Wrapper>
      <DeviceContainer>
        {device.name}
        <br></br> {device.reading}
      </DeviceContainer>
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

const DeviceContainer = styled.div`
  font-weight: bold;
  border-radius: 20px;
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;

  display: inline-block;

  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 1.5rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;

export default Devices;
