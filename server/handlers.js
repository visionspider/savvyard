"use strict";
const { MongoClient } = require("mongodb");
const { getPositionFromAddress, getWeatherFromCoordinates } = require("apis");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
// const { flights, reservations } = require("./data");

//GET retrieve user info 200 / 404 / 500
const getUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  try {
    const db = client.db("project_slingair");

    const flights = await db.collection("flights").find().toArray();

    return res.status(200).json({
      message: "All available flights have been retrieved successfully.",
      data: flights,
    });
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};

//PATCH user info 200 / 404 / 500
const updateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  try {
    const db = client.db("project_slingair");

    const flights = await db.collection("flights").find().toArray();

    return res.status(200).json({
      message: "All available flights have been retrieved successfully.",
      data: flights,
    });
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};

const getWeather = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  try {
    const db = client.db("project_slingair");

    const flights = await db.collection("flights").find().toArray();

    return res.status(200).json({
      message: "All available flights have been retrieved successfully.",
      data: flights,
    });
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};

const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  //get lat and long from address to use with weather api
  getPositionFromAddress(
    "1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8"
  ).then((response) => console.log(response));
  await client.connect();
  try {
    const db = client.db("project_slingair");

    const flights = await db.collection("flights").find().toArray();

    return res.status(200).json({
      message: "All available flights have been retrieved successfully.",
      data: flights,
    });
  } catch (err) {
    res.status(500).json({
      message: "An unknown error has occurred. Please try your request again.",
    });
  }
  client.close();
};

module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteZone,
  deleteDevice,
  getWeather,
};
