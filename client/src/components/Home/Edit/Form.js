import _ from "lodash";
import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../Context/CurrentUserContext";
import DeviceFormContent from "./DeviceFormContent";
import { deviceTemplate, zoneTemplate } from "./templates";
import ZoneFormContent from "./ZoneFormContent";
const Form = ({ set, zone, pos, type }) => {
  const { addZoneOrDevice } = useContext(CurrentUserContext);
  const handleSubmit = (ev, type) => {
    ev.preventDefault();
    if (type === "device") {
      const deviceType = ev.target.devices;
      const deviceName = ev.target.name;
      let deviceInfo;
      deviceTemplate.forEach((device) => {
        if (device.type === deviceType.value) deviceInfo = { ...device };
      });
      deviceInfo.name = deviceName.value;
      deviceInfo.pos = pos + 1;
      deviceInfo.relation = zone;
      // console.log(zone);
      deviceInfo.id = deviceInfo.id.replace("NUM", zone[zone.length - 1]);
      deviceInfo.id = deviceInfo.id.replace("NUM", pos + 1);

      addZoneOrDevice(deviceInfo, type);
    } else if (type === "zone") {
      const zoneName = ev.target.name;
      let zoneInfo = _.cloneDeep(zoneTemplate);
      zoneInfo.data.zoneName = zoneName.value;
      zoneInfo.pos = pos + 1;
      // console.log(zoneInfo.zoneId);
      zoneInfo.zoneId = zoneInfo.zoneId.replace("NUM", pos + 1);
      // console.log(zoneInfo);
      addZoneOrDevice(zoneInfo, type);
    }
    set(false);
  };
  return (
    <AddForm onSubmit={(ev) => handleSubmit(ev, type)}>
      {type === "device" ? (
        <DeviceFormContent />
      ) : type === "zone" ? (
        <ZoneFormContent />
      ) : (
        <></>
      )}
      <CancelBtn type="button" className="cancel" onClick={() => set(false)}>
        Cancel
      </CancelBtn>
      <AddBtn type={"submit"}>Add</AddBtn>
    </AddForm>
  );
};

const AddForm = styled.form`
  position: relative;
  margin: 5% 0;
  width: 90vw;
  max-width: 500px;
  padding: 2%;
  gap: 20px;
  display: flex;
  background-color: white;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 8px 0px darkgray;
  box-shadow: 0px 0px 8px 0px darkgray;
  border-radius: 20px;
`;
const CancelBtn = styled.button``;
const AddBtn = styled.button``;
export default Form;
