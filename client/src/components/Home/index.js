import React, { useState } from "react";
import styled from "styled-components";
import useScrollDirection from "../hooks/useScrollDirection.hook";
import { ZoneArr } from "./temp-user-data";
import Zones from "./Zones";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const scrollDirection = useScrollDirection();

  return (
    <Wrapper>
      <EditHeader className={scrollDirection ? "scrollDown" : "scrollUp"}>
        {edit ? "CANCEL | SAVE" : "EDIT"}
      </EditHeader>
      {ZoneArr.map((zone) => (
        <Zones zone={zone} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 8px 0px lightgray;
  box-shadow: 0px 0px 8px 0px red;
`;

const EditHeader = styled.div`
  height: 6vh;
  /* width: 100%; */
  position: sticky;
  top: 0px;
  /* overflow: hidden; */
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  border: solid 1px red;
  z-index: 1;
  &.scrollDown {
    /* position: none; */

    /* top: -6vh; */
  }
`;
export default Home;
