import React, { useState } from "react";
import styled from "styled-components";
import { GiGreenhouse } from "react-icons/gi";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useScrollDirection from "../hooks/useScrollDirection.hook";

const Header = () => {
  const scrollDirection = useScrollDirection();
  return (
    <Wrapper
      //   style={{ top: scrollDirection ? "-15" : "0" }}
      className={scrollDirection ? "scrollDown" : "scrollUp"}
    >
      <Title to="/home">
        <GiGreenhouse />
        Savvyard
      </Title>
      <OptionDiv className={"dropdown"}>
        <OptionIcon className={"dropbtn"} />
        <OptionContentDiv className={"dropdown-content"}>
          <Content to="/home">
            <p>Home</p>
          </Content>
          <Content to="/weather">
            <p>Weather</p>
          </Content>
          <Content to="/data">
            <p>Data</p>
          </Content>
        </OptionContentDiv>
      </OptionDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 15vh;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 2;
  /* overflow: hidden; */
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.5s;
  &.scrollDown {
    top: -15vh;
  }
`;

const Title = styled(NavLink)`
  font-size: 10vmin;
  align-self: center;
  font-weight: bold;
`;
const OptionDiv = styled.div`
  margin-right: 1%;
  position: relative;
  display: inline-block;
  align-self: center;

  &.dropdown:hover {
    .dropdown-content {
      display: block;
    }
  }

  &.dropdown:hover,
  &.dropdown:active {
    .dropbtn {
      /* background-color: RGBA(22, 233, 227, 0.3); */
      border-bottom: solid 5px red;
    }
  }
`;

const OptionIcon = styled(BsList)`
  font-size: 13vmin;
`;

const OptionContentDiv = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: RGBA(241, 241, 241, 0.9);
  min-width: 250px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  border-radius: 20px;
`;

const Content = styled(NavLink)`
  padding: 12px 16px;
  display: block;
  /* border-radius: 20px; */
  :first-child {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  :last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export default Header;
