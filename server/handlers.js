"use strict";
// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

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
const USERS_DATA = "users_data";
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
      if (remove.list.zones > 0) {
        await Promise.all(
          remove.list.zones.map(
            (zone, pos) =>
              DB.collection(USERS_DATA).updateOne(
                { _id },
                { $pull: { [`userInfo.zones${[pos]}.${zone}`]: "" } }
              ) //`userInfo.zones.${zone}`
          )
        );
        console.log();
      }
      // const removeInfo = await DB.collection(USERS_DATA).deleteOne({ _id });
      return res.status(200).json({
        message: "All available flights have been retrieved successfully.",
        data: flights,
      });
    } else if (user && add) {
    } else if (user && remove) {
    }
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};
// back and forth between front and back. Heavy lifting in back-end to make it easy in the front-end

//GET weather from weather API using latitude and longitude 200 / 400 / 500
const getWeather = async (req, res) => {
  const _id = req.params.userId;
  await client.connect();
  try {
    const user = await DB.collection(USERS_DATA).findOne({ _id });
    if (user) {
      const weather = await getWeatherFromCoordinates(
        user.userInfo.location
      ).then((result) => result);
      return res.status(200).json({
        message: "Weather fetched successfully.",
        data: weather,
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
};
