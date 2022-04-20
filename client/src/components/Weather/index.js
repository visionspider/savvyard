import React, { useContext } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "../Context/CurrentUserContext";
import { DateTime } from "luxon";
import WeatherIcon from "./WeatherIcon";
import Error from "../Error";
import ToggleUnit from "../ToggleUnit";
import Loading from "../Loading";
const Weather = () => {
  const { weather, userInfo, unitChange, status } =
    useContext(CurrentUserContext);
  if (status.state === "loading") {
    return <Loading />;
  } else if (
    status.state === "error" ||
    userInfo.userInfo === undefined ||
    weather.name === undefined
  ) {
    return <Error />;
  } else if (status.state === "idle") {
    const date = DateTime.now()
      .setZone(userInfo.userInfo.location.timezone)
      .setLocale("en")
      .toLocaleString(DateTime.DATE_HUGE);
    const calcFahrenheit = (num) => {
      //Equations °F = (°C × 9/5) + 32 //°C = (°F − 32) x 5/9
      return (+num * 9) / 5 + 32;
    };
    return (
      <Wrapper>
        <ToggleUnit />
        <WeatherBox>
          <p className="date">{date}</p>
          <p className="city">{weather.name}</p>
          <p className="temp">
            {unitChange
              ? calcFahrenheit(weather.main.temp).toFixed(0) + "°F"
              : weather.main.temp.toFixed(1) + "°C"}
          </p>
          <WeatherIcon condition={weather.weather[0].id} />
        </WeatherBox>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 20px;
  margin: 1%;
  padding: 1%;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 8px 0px lightgray;
  box-shadow: 0px 0px 8px 0px lightgray;
  background-color: lightgray;
`;

const WeatherBox = styled.div`
  border-radius: 20px;

  padding: 5%;
  .date {
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.5);
  }
  .temp {
    font-size: 81px;
    color: rgba(0, 0, 0, 0.9);
    font-weight: 100;
  }
  .city {
    font-size: 21px;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 5px;
    color: rgba(0, 0, 0, 0.7);
  }
  .icon {
    position: relative;
    display: inline-block;
    width: 12em;
    height: 10em;
    font-size: 1em; /* control icon size here */
  }
`;
export default Weather;
