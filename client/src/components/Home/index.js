import React, { useContext, useEffect, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import Error from "../Error";
import useScrollDirection from "../hooks/useScrollDirection.hook";
import Loading from "../Loading";
import Add from "./Edit/Add";
import Delete from "./Edit/Delete";
import { ZoneArr } from "./temp-user-data";
import Zones from "./Zones";

const Home = () => {
  const scrollDirection = useScrollDirection();
  const { edit, setEdit, editUserInfo, status, cancelEdit } =
    useContext(CurrentUserContext);
  console.log("inside home component ", editUserInfo);
  // console.log(status);
  if (status.state === "loading") {
    return <Loading />;
  } else if (status.state === "error") {
    return <Error />;
  } else if (status.state === "idle") {
    const zones = [...editUserInfo.userInfo.zones];
    //When mapping a key is only required for the parent component if using a react fragment we cannot use the shortform when its the parent while mapping
    return (
      <Wrapper>
        <EditHeader className={scrollDirection ? "scrollDown" : "scrollUp"}>
          {edit ? (
            <>
              <CancelBtn
                className="cancel"
                onClick={() => {
                  cancelEdit();
                  setEdit(false);
                }}
              >
                CANCEL
              </CancelBtn>{" "}
              <SaveBtn>SAVE</SaveBtn>
            </>
          ) : (
            <EditBtn
              onClick={() => {
                setEdit(true);
              }}
            >
              EDIT
            </EditBtn>
          )}
        </EditHeader>
        {zones.length !== 0 ? (
          <>
            {zones.map((zone, pos) => (
              <React.Fragment key={zone.zoneId}>
                {edit && <Delete id={zone.zoneId} type={"zone"} />}
                <Zones zone={zone} edit={edit} />
                {zones.length === pos + 1 && edit && (
                  <Add zone={zone.zoneId} pos={zone.pos} type={"zone"} />
                )}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>{edit && <Add zone={"zoneId1"} pos={0} type={"zone"} />}</>
        )}
      </Wrapper>
    );
  }
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
  box-shadow: 0px 0px 8px 0px lightgray;
  background-color: lightgray;
`;

const EditHeader = styled.div`
  height: 6vh;
  position: fixed;
  display: flex;
  gap: 20px;
  top: 15.5vh;
  background: transparent;
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  z-index: 101;
  &.scrollDown {
    top: 1vh;
  }
`;

const EditBtn = styled.button``;

const CancelBtn = styled.button``;
const SaveBtn = styled(EditBtn)``;
export default Home;
