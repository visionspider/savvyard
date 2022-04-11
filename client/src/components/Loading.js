import { NavLink } from "react-router-dom";
import styled from "styled-components";

import loadingImg from "../assets/loading.gif";
const Loading = () => {
  return (
    <Wrapper>
      <LoadingContainer>
        <LoadingImg src={loadingImg} alt="Loading" />
        <p>
          credits:{" "}
          <NavLink
            style={{ color: "lightgray", textDecoration: "none" }}
            to={{ pathname: "https://www.instagram.com/p/BVk2TpTBc5D/" }}
            target="_blank"
          >
            sahil.motion
          </NavLink>
        </p>
      </LoadingContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingContainer = styled.div`
  height: 90%;
  width: 90%;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & {
    p {
      color: lightgray;
    }
  }
`;

const LoadingImg = styled.img`
  /* margin: auto; */
  border-radius: 20px;
`;
export default Loading;
