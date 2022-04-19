"use strict";
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");
const { tempSensor } = require("./sensors");
//mongodb
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const client = new MongoClient(MONGO_URI, options);
const DB = client.db("savvyard");
const USERS_DATA = "user_data";
const USERS = "users";
const DEVICES = "devices";
const SENSORS = "sensors";
//APIS
const { getPositionFromAddress, getWeatherFromCoordinates } = require("./apis");

// use this data. Changes will persist until the server (backend) restarts.

//GET retrieve user info 200 / 404 / 500
const getUser = async (req, res) => {
  const _id = req.params.userId;
  await client.connect();
  try {
    const user = await DB.collection(USERS_DATA).findOne({ _id });
    if (user) {
      return res.status(200).json({
        status: 200,
        message: "User retrieved successfully.",
        data: user,
      });
    } else {
      return res
        .status(404)
        .json({ status: 404, message: "User id is incorrect.", data: _id });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,

      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};
//{remove : { list : {zones:[], device:[], sensors: [], }, } }
//PATCH user info 200 / 404 / 500
const updateUserInfo = async (req, res) => {
  await client.connect();
  try {
    const { _id, data = false, type = false } = req.body;
    console.log("ID: ", _id, "DATA: ", data, "TYPE: ", type);
    //type can be zones / personal-info
    const user = await DB.collection(USERS_DATA).findOne({ _id });
    if (data && user && type === "zones") {
      console.log("just checked DATA, USER AND TYPE = ZONES");
      // console.log(remove.list.zones > 0);
      let result = null;

      result = await DB.collection(USERS_DATA).updateOne(
        { _id, [`userInfo`]: user.userInfo },
        { $set: { [`userInfo`]: data } }
      );
      console.log(result.modifiedCount);
      if (result.matchedCount > 0) {
        const updatedUser = await DB.collection(USERS_DATA).findOne({ _id });
        return res.status(200).json({
          status: 200,

          message: "Updated user zones successfully.",
          data: updatedUser,
        });
      } else {
        //IF THERE IS NO CHANGES TO BE MADE IT GOES HERE. ADD A RESPONSE THAT ='s NO CHANGES MADE as message for user
        return res.status(404).json({
          status: 404,

          message: "Could not update due to unknown ID.",
          data: _id,
          result,
        });
      }
    } else if (data && user && type === "personal-info") {
      console.log("just checked DATA, USER AND TYPE = personal-info");
      return;
    } else {
      return res.status(404).json({
        status: 404,

        message: "Could not update.",
        data: result,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,

      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};
// back and forth between front and back. Heavy lifting in back-end to make it easy in the front-end
const getSensors = (user, weather) => {
  // console.log("inside getSensors", user);
  //seperate sensor by type
  const tempSensorsArray = [];
  user.userInfo.zones.forEach((zone) =>
    zone.data.sensors.forEach((sensor) => {
      if (sensor.type === "temp-sensor")
        tempSensorsArray.push({ zoneId: zone.zoneId, ...sensor });
    })
  );
  // console.log("after tempSensorsArray = ", tempSensorsArray);
  //seperate devices by type
  const devicesArray = [];
  user.userInfo.zones.forEach((zone) =>
    zone.data.devices.forEach((device) => {
      if (device.type === "heat-fan") {
        devicesArray.push({ zoneId: zone.zoneId, ...device });
      } else if (device.type === "cool-fan") {
        devicesArray.push({ zoneId: zone.zoneId, ...device });
      }
    })
  );
  // console.log("after devicesArray = ", devicesArray);

  //HOURLYUNITS AND TEMPERATURE2M is for openweather API
  // const hourly_units = weather.data.hourly_units ;
  // const temperature_2m = weather.data.hourly.temperature_2m

  //USER LOCATION TIMEZONE
  const timezone = user.userInfo.location.timezone;
  //Breaking down necessary data from weather API
  const currentWeather = weather.main.temp;
  const currentTime = weather.dt;
  const sunrise = weather.sys.sunrise * 1000;
  const sunset = weather.sys.sunset * 1000;
  const condition = weather.weather[0].main;
  const outdoorTemp = {
    sunrise,
    sunset,
    currentWeather,
    currentTime,
    timezone,
    condition,
  };
  //sensor and outdoorTemp
  //LOGIC for TIME
  //RETURN ZONEID, SENSOR ID WITH NEW TEMPREADING TO MODIFY THE SENSOR
  //AND SEND BACK THE DEVICE THAT IS BEING ACTIVATED TO CHANGE TEMP RETURN ZONEID, DEVICEID, LISTEN(SENSORID) and SWITCH BOOLEAN VALUE
  // AND SAVE THE DATA FOR VISUALIZATION WE NEED (SENSORID,ZONEID, TIMESTAMP, TEMPREADING)
  const data = [];

  console.log("before setInterval");
  const tempLoss = setInterval(() => {
    console.log("inside setInterval");
    tempSensorsArray.forEach((sensor) =>
      devicesArray.forEach((device) =>
        data.push(tempSensor(sensor, device, outdoorTemp))
      )
    );
    console.log("DATA = ", data);
    clearInterval(tempLoss);
  }, 1000);
  // 1 min = 60000

  return;
};

//GET weather from weather API using latitude and longitude 200 / 400 / 500
const getWeather = async (req, res) => {
  const _id = req.params.userId;
  // console.log(_id);
  await client.connect();
  try {
    const user = await DB.collection(USERS_DATA).findOne({ _id });

    if (user) {
      const weather = await getWeatherFromCoordinates(user.userInfo.location);
      // console.log(weather);
      if (weather) {
      }
      getSensors(user, weather);
      return res.status(200).json({
        status: 200,

        message: "Weather fetched successfully.",
        data: weather,
        user,
      });
    } else {
      return res.status(400).json({
        status: 400,

        message: "User id is incorrect.",
        data: _id,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,

      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};

const addUser = async (req, res) => {
  //get lat and long from address to use with weather api
  //POS STRUCTURE = { lat: 45.52565, lng: -73.605926, timezone: 'America/Toronto' }
  // const pos = await getPositionFromAddress(
  //   "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
  // ).then((response) => console.log(response));
  // await client.connect();
  // try {
  //   const flights = await DB.collection(USERS_DATA).find().toArray();
  //   return res.status(200).json({
  //     message: "All available flights have been retrieved successfully.",
  //     data: flights,
  //   });
  // } catch (err) {
  //   res.status(500).json({
  //     message: "An unknown error has occurred. Please try your request again.",
  //   });
  // }
  // client.close();
};

module.exports = {
  addUser,
  getUser,
  updateUserInfo,
  getWeather,
  getSensors,
};
