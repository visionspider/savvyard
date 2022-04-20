import React, { useContext } from "react";
import { CurrentUserContext } from "./Context/CurrentUserContext";

const ToggleUnit = () => {
  const { unitChange, setUnitChange } = useContext(CurrentUserContext);
  const handleSwitch = () => {
    setUnitChange(!unitChange);
  };
  return (
    <>
      <label style={{ marginTop: "30px", width: "200px" }}>
        Toggle °C / °F :{" "}
        <input
          type="button"
          className={`switch ${unitChange && "active"}`}
          onClick={handleSwitch}
          value={unitChange}
          title="Toggle me"
          id="input_switch"
        />
      </label>
    </>
  );
};

export default ToggleUnit;
