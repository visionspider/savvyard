import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Error from "../Error";
import Loading from "../Loading";

const Welcome = () => {
  if (false) {
    return <Error />;
  } else {
    return (
      <Wrapper>
        <WelcomeBtn to="/home">Continue</WelcomeBtn>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  /* background-color: lightgray; */
`;

const WelcomeBtn = styled(NavLink)`
  align-self: center;
  color: black;
  text-decoration: none;
`;
export default Welcome;
