// const { request } = require("express");
const request = require("request-promise");
const { DateTime } = require("luxon");
const opencage = require("opencage-api-client");
require("dotenv").config();

//GET latitude and longitude to use with weather API
const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  // console.log(.toISO());

  return opencage
    .geocode(requestObj)
    .then((res) => {
      // console.log(
      //   DateTime.now()
      //     .setZone(res.results[0].annotations.timezone.name)
      //     .setLocale("en")
      //     .toLocaleString(DateTime.DATE_FULL)
      // );
      // console.log(res.results[0].annotations.timezone.name);
      const location = {
        ...res.results[0].geometry,
        timezone: res.results[0].annotations.timezone.name,
      };
      console.log(location);
      return location;
      //TIMEZONE IS JSUT BELOW
      // const { name } = coordinates.annotations.timezone;
    })
    .catch((err) => err.message);
};
// const getWeather = () => {
//   return request(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${}&lon=${}&appid=${OPEN_WEATHER_API_KEY}`
//   )
//     .then((res) => JSON.parse(res))
//     .then((data) => data)
//     .catch((err) => err);
// };

const getWeatherFromCoordinates = (coordinates) => {
  const { lat, lng } = coordinates;

  const OPEN_WEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

  return request(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(
      2
    )}&lon=${lng.toFixed(2)}&appid=${OPEN_WEATHER_API_KEY}&units=metric`
  )
    .then((res) => JSON.parse(res))
    .then((data) => data)
    .catch((err) => err);
  //FOR OPEN-METEO API
  // return request(`https://api.open-meteo.com/v1/forecast?latitude=${lat.toFixed(
  //   2
  // )}&longitude=${lng.toFixed(
  //   2
  // )}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,precipitation,cloudcover&daily=weathercode,sunrise,sunset,winddirection_10m_dominant&current_weather=true&timezone=America%2FNew_York
  //   `)
  //   .then((res) => JSON.parse(res))
  //   .then((data) => data)
  //   .catch((err) => err);
};

// getPositionFromAddress("H2T 3A3").then((msg) => console.log(msg));

// getWeatherFromCoordinates({ lat: 45.52565, lng: -73.605926 }).then((msg) =>
//   console.log(msg)
// );
module.exports = { getPositionFromAddress, getWeatherFromCoordinates };
