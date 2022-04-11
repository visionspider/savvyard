import styled from "styled-components";
import Devices from "../Devices.js";

const Zones = ({ zone }) => {
  const { data } = zone;

  let deviceArr = [...data.sensors, ...data.devices].sort(
    (device1, device2) => device1.pos - device2.pos
  );

  return (
    <Wrapper>
      <ZoneContainer>
        <h2>{data.zoneName}</h2>
        {deviceArr.map((device) => (
          <Devices device={device} />
        ))}
      </ZoneContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  gap: 20px;
  margin: 1%;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 8px 0px lightgray;
  box-shadow: 0px 0px 8px 0px lightgray;
`;

const ZoneContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 1%;
  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    flex-direction: row;
  }
`;
export default Zones;
