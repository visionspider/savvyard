import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as errorimg } from "../assets/error.svg";
import { CurrentUserContext } from "./Context/CurrentUserContext";
import Loading from "./Loading";
const Error = () => {
  const { getWeather, getUser, status } = useContext(CurrentUserContext);
  console.log(status);
  return (
    <Wrapper>
      <ErrorContainer>
        <ErrorImg alt="Error" />

        <h1>404 {status.status} Error</h1>
        <p>
          {status.msg}
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <ReturnBtn
          to={{ pathname: "/home" }}
          target="_self"
          onClick={() => {
            console.log("Starting fetches");
            getUser();
            getWeather();
          }}
        >
          Go back to Homepage
        </ReturnBtn>
      </ErrorContainer>
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

const ErrorContainer = styled.div`
  height: 90%;
  width: 90%;
  overflow: hidden;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & {
    h1 {
      margin-bottom: 1%;
      font-size: 2rem;
    }
    p {
      text-align: center;
      font-size: 1.5rem;
      margin: 1%;
    }
  }
`;

const ErrorImg = styled(errorimg)`
  /* margin: auto; */
  border-radius: 20px;
`;

const ReturnBtn = styled(NavLink)`
  /* font-size: 3vmin;
  letter-spacing: 0.2vmin;
  font-weight: bold;
  text-decoration: none;
  background: lightgreen;
  color: white;
  padding: 4vmin;
  margin: 1%;
  border-radius: 20px; */
  /* CSS */
  margin-bottom: 1%;
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;

  display: inline-block;

  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 1.5rem;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
export default Error;
