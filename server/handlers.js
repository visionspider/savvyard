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
  const _id = +req.params.userId;
  await client.connect();
  try {
    const user = await DB.collection(USERS_DATA).findOne({ _id });
    if (user) {
      return res.status(200).json({
        message: "User retrieved successfully.",
        data: user,
      });
    } else {
      return res
        .status(404)
        .json({ message: "User id is incorrect.", data: _id });
    }
  } catch (err) {
    res.status(500).json({
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
    const { _id, remove = false, add = false } = req.body;

    const user = await DB.collection(USERS_DATA).findOne({ _id });
    if (user && remove) {
      console.log("inside user and remove and add");
      // console.log(remove.list.zones > 0);
      let result = null;
      if (remove.list.zones.length > 0) {
        result = await Promise.all(
          remove.list.zones.map((zone, pos) => {
            console.log("in map = ", zone);
            return DB.collection(USERS_DATA).updateOne(
              { _id },
              { $pull: { [`userInfo.zones${[pos]}.zoneId`]: zone } }
            ); //`userInfo.zones.${zone}`
          })
        );
      }
      // const removeInfo = await DB.collection(USERS_DATA).deleteOne({ _id });
      return res.status(200).json({
        message: "Updated user successfully.",
        data: result,
      });
    } else if (user && add) {
      console.log("inside user and add");
      return;
    } else if (user && remove) {
      console.log("inside user and remove");
      return;
    }
    return;
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};
// back and forth between front and back. Heavy lifting in back-end to make it easy in the front-end
const getSensors = ({ user, weather }) => {
  //seperate sensor by type
  const tempSensorsArray = user.userInfo.zones.map((zone) =>
    zone.data.sensors.map((sensor) => {
      if (sensor.sensorType === "temp-sensor")
        return { zoneId: zone.zoneId, ...sensor };
    })
  );
  //seperate devices by type
  const devicesArray = user.userInfo.zones.map((zone) =>
    zone.data.devices.map((device) => {
      if (device.deviceType === "heat-fan") {
        return { zoneId: zone.zoneId, ...device };
      } else if (device.deviceType === "cool-fan") {
        return { zoneId: zone.zoneId, ...device };
      }
    })
  );

  // const hourly_units = weather.data.hourly_units ;
  // const temperature_2m = weather.data.hourly.temperature_2m
  const currentWeather = weather.main.temp;
  const currentTime = weather.dt;
  const sunrise = weather.sys.sunrise;
  const sunset = weather.sys.sunset;
  const condition = weather.weather.main;
  const outdoorTemp = {
    sunrise,
    sunset,
    currentWeather,
    currentTime,
    condition,
  };
  //sensor and outdoorTemp
  //LOGIC for TIME
  //RETURN ZONEID, SENSOR ID WITH NEW TEMPREADING TO MODIFY THE SENSOR
  //AND SEND BACK THE DEVICE THAT IS BEING ACTIVATED TO CHANGE TEMP RETURN ZONEID, DEVICEID, LISTEN(SENSORID) and SWITCH BOOLEAN VALUE
  // AND SAVE THE DATA FOR VISUALIZATION WE NEED (SENSORID,ZONEID, TIMESTAMP, TEMPREADING)
  setInterval(() => {
    tempSensorsArray.forEach((sensor) =>
      devicesArray.forEach((device) => tempSensor(sensor, device, outdoorTemp))
    );
  }, [60000]);
};

//GET weather from weather API using latitude and longitude 200 / 400 / 500
const getWeather = async (req, res) => {
  const _id = req.params.userId;
  console.log(_id);
  await client.connect();
  try {
    const user = await DB.collection(USERS_DATA).findOne({ _id });

    if (user) {
      const weather = await getWeatherFromCoordinates(user.userInfo.location);
      console.log(weather);
      // getSensors(user, weather);
      if (weather) {
      }
      return res.status(200).json({
        message: "Weather fetched successfully.",
        data: weather,
        user,
      });
    } else {
      return res.status(400).json({
        message: "User id is incorrect.",
        data: _id,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};

//STRETCH
const addUser = async (req, res) => {
  //get lat and long from address to use with weather api
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

const deleteDevice = async () => {};

const deleteZone = async () => {};

module.exports = {
  addUser,
  getUser,
  updateUserInfo,
  deleteZone,
  deleteDevice,
  getWeather,
  getSensors,
};
