import React from "react";
import styled from "styled-components";

const WeatherIcon = ({ condition }) => {
  //600-622 snow / 300-531 rain / 200-232 thunderstorm / 800 sunny / 801 sun with clouds / 802-804 cloudy
  return (
    <Icon>
      {condition === 800 ? (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      ) : condition === 801 ? (
        <div className="icon sunny">
          <div className="cloud"></div>
          <div className="sun cloudy">
            <div className="rays"></div>
          </div>
        </div>
      ) : condition >= 500 && condition <= 504 ? (
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun cloudy">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      ) : condition >= 200 && condition <= 232 ? (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      ) : condition >= 802 && condition <= 804 ? (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      ) : (condition >= 300 && condition <= 321) ||
        (condition >= 511 && condition <= 531) ? (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      ) : condition >= 600 && condition <= 622 ? (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </Icon>
  );
};
const Icon = styled.div`
  .icon {
    position: relative;
    display: inline-block;
    width: 12em;
    height: 10em;
    font-size: 1em; /* control icon size here */
    background: white;
    border-radius: 20px;
  }
  .cloud {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 3.6875em;
    height: 3.6875em;
    margin: -1.84375em;
    background: white;
    border-radius: 50%;
    box-shadow: -2.1875em 0.6875em 0 -0.6875em white,
      2.0625em 0.9375em 0 -0.9375em white, 0 0 0 0.375em black,
      -2.1875em 0.6875em 0 -0.3125em black, 2.0625em 0.9375em 0 -0.5625em black;
  }
  .cloud:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: white;
    box-shadow: 0 0.4375em 0 -0.0625em black;
  }
  .cloud:nth-child(2) {
    z-index: 0;
    background: black;
    box-shadow: -2.1875em 0.6875em 0 -0.6875em black,
      2.0625em 0.9375em 0 -0.9375em black, 0 0 0 0.375em black,
      -2.1875em 0.6875em 0 -0.3125em black, 2.0625em 0.9375em 0 -0.5625em black;
    opacity: 0.3;
    transform: scale(0.5) translate(6em, -3em);
    animation: cloud 4s linear infinite;
  }
  .cloud:nth-child(2):after {
    background: black;
  }

  .sun {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2.5em;
    height: 2.5em;
    margin: -1.25em;
    background: #ffeb3b;
    border-radius: 50%;
    box-shadow: 0 0 0 0.375em #ffeb3b;
    animation: spin 12s infinite linear;
  }
  .sun.cloudy {
    top: 40%;
    left: 70%;
  }
  .rays {
    position: absolute;
    top: -2em;
    left: 50%;
    display: block;
    width: 0.375em;
    height: 1.125em;
    margin-left: -0.1875em;
    background: #ffeb3b;
    border-radius: 0.25em;
    box-shadow: 0 5.375em #ffeb3b;
  }
  .rays:before,
  .rays:after {
    content: "";
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    transform: rotate(60deg);
    transform-origin: 50% 3.25em;
    background: #ffeb3b;
    border-radius: 0.25em;
    box-shadow: 0 5.375em #ffeb3b;
  }
  .rays:before {
    transform: rotate(120deg);
  }
  .rain,
  .lightning,
  .snow {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 3.75em;
    height: 3.75em;
    margin: 0.375em 0 0 -2em;
    background: white;
  }

  .rain:after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 1.125em;
    height: 1.125em;
    margin: -1em 0 0 -0.25em;
    background: #0cf;
    border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
    box-shadow: 0.625em 0.875em 0 -0.125em #e0e0e0,
      -0.875em 1.125em 0 -0.125em #e0e0e0, -1.375em -0.125em 0 #e0e0e0;
    transform: rotate(-28deg);
    animation: rain 3s linear infinite;
  }

  .bolt {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.25em 0 0 -0.125em;
    color: black;
    opacity: 0.3;
    animation: lightning 2s linear infinite;
  }
  .bolt:nth-child(2) {
    width: 0.5em;
    height: 0.25em;
    margin: -1.75em 0 0 -1.875em;
    transform: translate(2.5em, 2.25em);
    opacity: 0.2;
    animation: lightning 1.5s linear infinite;
  }
  .bolt:before,
  .bolt:after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin: -1.625em 0 0 -1.0125em;
    border-top: 1.25em solid transparent;
    border-right: 0.75em solid;
    border-bottom: 0.75em solid;
    border-left: 0.5em solid transparent;
    transform: skewX(-10deg);
  }
  .bolt:after {
    margin: -0.25em 0 0 -0.25em;
    border-top: 0.75em solid;
    border-right: 0.5em solid transparent;
    border-bottom: 1.25em solid transparent;
    border-left: 0.75em solid;
    transform: skewX(-10deg);
  }
  .bolt:nth-child(2):before {
    margin: -0.75em 0 0 -0.5em;
    border-top: 0.625em solid transparent;
    border-right: 0.375em solid;
    border-bottom: 0.375em solid;
    border-left: 0.25em solid transparent;
  }
  .bolt:nth-child(2):after {
    margin: -0.125em 0 0 -0.125em;
    border-top: 0.375em solid;
    border-right: 0.25em solid transparent;
    border-bottom: 0.625em solid transparent;
    border-left: 0.375em solid;
  }
  .flake:before,
  .flake:after {
    content: "\u2744";
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1.025em 0 0 -1.0125em;
    color: black;
    opacity: 0.2;
    animation: spin 8s linear infinite reverse;
  }
  .flake:after {
    margin: 0.125em 0 0 -1em;
    font-size: 1.5em;
    opacity: 0.4;
    animation: spin 14s linear infinite;
  }
  .flake:nth-child(2):before {
    margin: -0.5em 0 0 0.25em;
    font-size: 1.25em;
    opacity: 0.2;
    animation: spin 10s linear infinite;
  }
  .flake:nth-child(2):after {
    margin: 0.375em 0 0 0.125em;
    font-size: 2em;
    opacity: 0.4;
    animation: spin 16s linear infinite reverse;
  }
  ///ANIMATIONS BELOW
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rain {
    0% {
      background: #0cf;
      box-shadow: 0.625em 0.875em 0 -0.125em RGBA(0, 0, 0, 0.2),
        -0.875em 1.125em 0 -0.125em RGBA(0, 0, 0, 0.2), -1.375em -0.125em 0 #0cf;
    }
    25% {
      box-shadow: 0.625em 0.875em 0 -0.125em RGBA(0, 0, 0, 0.2),
        -0.875em 1.125em 0 -0.125em #0cf, -1.375em -0.125em 0 RGBA(0, 0, 0, 0.2);
    }
    50% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: 0.625em 0.875em 0 -0.125em #0cf,
        -0.875em 1.125em 0 -0.125em RGBA(0, 0, 0, 0.2),
        -1.375em -0.125em 0 RGBA(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0.625em 0.875em 0 -0.125em RGBA(0, 0, 0, 0.2),
        -0.875em 1.125em 0 -0.125em RGBA(0, 0, 0, 0.2), -1.375em -0.125em 0 #0cf;
    }
  }
  @keyframes lightning {
    45% {
      color: black;
      background: black;
      opacity: 0.2;
    }
    50% {
      color: #0cf;
      background: #0cf;
      opacity: 1;
    }
    55% {
      color: black;
      background: black;
      opacity: 0.2;
    }
  }
  @keyframes cloud {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0;
      transform: scale(0.5) translate(-200%, -3em);
    }
  }
`;
export default WeatherIcon;
