import React, { useContext, useState } from "react";
import { RiEyeCloseFill } from "react-icons/ri";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import Error from "../Error";
import useScrollDirection from "../hooks/useScrollDirection.hook";
import Loading from "../Loading";
import { ZoneArr } from "./temp-user-data";
import Zones from "./Zones";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const scrollDirection = useScrollDirection();
  const { userInfo, status } = useContext(CurrentUserContext);

  console.log(status);
  if (status.state === "loading") {
    return <Loading />;
  } else if (status.state === "error") {
    return <Error />;
  } else if (status.state === "idle") {
    console.log(userInfo.userInfo.zones);
    return (
      <Wrapper>
        <EditHeader className={scrollDirection ? "scrollDown" : "scrollUp"}>
          {edit ? (
            <>
              <CancelBtn
                className="cancel"
                onClick={() => {
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
        {userInfo.userInfo.zones.map((zone) => (
          <Zones key={zone.zoneId} zone={zone} />
        ))}
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
`;

const EditHeader = styled.div`
  height: 6vh;
  /* width: 100%; */
  position: fixed;
  display: flex;
  gap: 20px;
  top: 15vh;
  background: transparent;
  /* overflow: hidden; */
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  /* border: solid 1px red; */
  z-index: 1;
  &.scrollDown {
    /* position: none; */
    top: 0vh;
    /* top: -6vh; */
  }
`;

const EditBtn = styled.button``;

const CancelBtn = styled.button``;
const SaveBtn = styled(EditBtn)``;
export default Home;
