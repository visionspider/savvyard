import React, { useContext, useEffect, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import Error from "../Error";
import useScrollDirection from "../hooks/useScrollDirection.hook";
import Loading from "../Loading";
import Add from "./Edit/Add";
import Delete from "./Edit/Delete";
import ToggleUnit from "../ToggleUnit";
import Zones from "./Zones";

const Home = () => {
  const scrollDirection = useScrollDirection();
  const { edit, setEdit, editUserInfo, status, cancelEdit, handleSubmit } =
    useContext(CurrentUserContext);

  // console.log(status);
  if (status.state === "loading") {
    return <Loading />;
  } else if (status.state === "error" || editUserInfo.userInfo === undefined) {
    return <Error />;
  } else if (status.state === "idle") {
    // console.log(editUserInfo);
    const zones = [...editUserInfo.userInfo.zones];
    //When mapping a key is only required for the parent component if using a react fragment we cannot use the shortform when its the parent while mapping
    return (
      <Wrapper>
        <ToggleUnit />

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
              <SaveBtn
                onClick={() => {
                  setEdit(false);
                  handleSubmit();
                }}
              >
                SAVE
              </SaveBtn>
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
                {edit && (
                  <span className="delete">
                    <Delete id={zone.zoneId} type={"zone"} />
                  </span>
                )}
                <Zones zone={zone} edit={edit} />
                {zones.length === pos + 1 && edit && (
                  <div className="add">
                    <Add zone={zone.zoneId} pos={zone.pos} type={"zone"} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            {edit && (
              <div className="add">
                <Add zone={"zoneId1"} pos={0} type={"zone"} />
              </div>
            )}
          </>
        )}
        {/* <Success className={"success"}>Saved successfully</Success> */}
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
  span.delete {
    position: relative;
    left: 95%;
  }

  div.add {
    align-self: center;
    display: flex;
    flex-direction: column;

    background: transparent;
  }
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
const Success = styled(EditBtn)`
  cursor: default;
  position: fixed;
  top: 90vh;
  left: 80vw;
  width: 250px;
  opacity: 1;
  &.success {
    animation: enter 4s linear forwards, 4s exit 12s linear forwards;
    @keyframes exit {
      0% {
        opacity: 1;
        margin-left: 0%;
      }
      50% {
        margin-left: 25%;
        opacity: 0.6;
      }
      100% {
        margin-left: 100%;
        visibility: hidden;
      }
    }

    @keyframes enter {
      0% {
        margin-left: 100%;
        opacity: 0.3;
      }
      50% {
        margin-left: 25%;
        opacity: 0.6;
      }
      100% {
        margin-left: 0%;
        opacity: 1;
        /* transform: scale(0) translate(0%, 0em); */
      }
    }
  }
`;
export default Home;
