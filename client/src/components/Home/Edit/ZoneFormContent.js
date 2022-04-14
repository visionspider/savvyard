import React from "react";

const ZoneFormContent = () => {
  return (
    <>
      <label htmlFor="zone-name">Name your zone:</label>
      <input
        type={"text"}
        id={"zone-name"}
        name="name"
        placeholder="zone 1"
      ></input>
    </>
  );
};

export default ZoneFormContent;
