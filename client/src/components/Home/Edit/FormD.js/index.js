import _ from "lodash";
import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../../../Context/CurrentUserContext";
import FanFormContent from "./FanFormContent";
import HumidityFormContent from "./HumidityFormContent";
import TempFormContent from "./TempFormContent";

const FormD = ({ device, setEditDevice }) => {
  const {
    editUserInfo,
    setEditUserInfo,
    sortEditUserInfoByPos,
    editSensorOrDevice,
    cancelEdit,
    getSensor,
    handleSubmit,
  } = useContext(CurrentUserContext);

  const handleChange = (e, type, btnClick = false) => {
    const deviceClone = _.cloneDeep(device);
    let check = false;
    if (type === "sensor") {
      //input type range
      const min = document.getElementById("input_min").value;
      const max = document.getElementById("input_max").value;
      if (min <= deviceClone.max && +min !== +device.min) {
        deviceClone.min = e.target.value;
        // console.log("min = ", deviceClone.min);
        check = true;
      } else if (max >= deviceClone.min && +max !== +deviceClone.max) {
        deviceClone.max = e.target.value;
        // console.log("max = ", device.max);
        check = true;
      }
    } else if (type === "fan") {
      //input type button
      //   console.log("fan");
      // const switchOffOn = document.getElementById("input_switch").value;
      const listenSensor = document.getElementById("input_sensor").value;

      if (btnClick) {
        deviceClone.switch = !deviceClone.switch;
        check = true;
      } else if (listenSensor !== deviceClone.listen) {
        deviceClone.listen = listenSensor;
        check = true;
        // console.log("listening to ", deviceClone.listen);
      }

      //   console.log(typeof deviceClone.switch, typeof switchOffOn);
    }
    if (check) {
      //modifying data

      const deviceArr = sortEditUserInfoByPos(editUserInfo);
      [...deviceArr].forEach((devices, pos) =>
        devices.forEach((device, pos2) => {
          if (device.id === deviceClone.id) {
            deviceArr[pos][pos2] = deviceClone;
          }
        })
      );
      //changing state
      setEditUserInfo(editSensorOrDevice(deviceArr));
    }
  };

  return (
    <Form
      onSubmit={(ev) => {
        setEditDevice(false);
        handleSubmit(ev);
      }}
    >
      {device.type === "humidity-sensor" ? (
        <HumidityFormContent device={device} handleChange={handleChange} />
      ) : device.type === "temp-sensor" ? (
        <TempFormContent device={device} handleChange={handleChange} />
      ) : device.type.includes("fan") ? (
        <FanFormContent
          device={device}
          handleChange={handleChange}
          getSensor={getSensor}
        />
      ) : (
        <></>
      )}
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => {
            setEditDevice(false);
            cancelEdit(device.id);
          }}
          className="cancel"
        >
          CANCEL
        </button>
        <button type="submit">SAVE</button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  margin: 20px;
  padding: 2%;
  min-width: 310px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 8px 0px darkgray;
  box-shadow: 0px 0px 8px 0px darkgray;
  border-radius: 20px;
`;
export default FormD;
