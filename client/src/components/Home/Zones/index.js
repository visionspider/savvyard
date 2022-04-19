import React from "react";
import styled from "styled-components";
import Devices from "../Devices/index.js";
import Add from "../Edit/Add.js";

const Zones = ({ zone, edit }) => {
  const { data, zoneId } = zone;

  let deviceArr = [...data.sensors, ...data.devices].sort(
    (device1, device2) => device1.pos - device2.pos
  );

  return (
    <Wrapper>
      <ZoneContainer>
        <h2>{data.zoneName}</h2>
        {deviceArr.length !== 0 ? (
          <>
            {deviceArr.map((device, pos) => {
              return (
                <React.Fragment key={device.id}>
                  {" "}
                  <Devices device={device} edit={edit} />
                  {deviceArr.length === pos + 1 && edit && (
                    <div className="add">
                      <Add zone={zoneId} pos={device.pos} type={"device"} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </>
        ) : (
          <>
            {edit && (
              <div className="add first">
                <Add zone={zoneId} pos={0} type={"device"} />
              </div>
            )}
          </>
        )}
      </ZoneContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 20px;
  margin: 1%;
  border-radius: 20px;
  min-height: 200px;
  -webkit-box-shadow: 0px 0px 8px 0px darkgray;
  box-shadow: 0px 0px 8px 0px darkgray;
`;

const ZoneContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: transparent;
  flex-direction: column;

  margin: 1%;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */

    flex-direction: row;
  }
  h2 {
    background-color: transparent;
  }
  .first {
    justify-self: center;
    position: relative;
    top: 8vh;
  }
`;
export default Zones;
