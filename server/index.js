"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

const { getUser, updateUser } = require("./handlers");

const { countryInformation } = require("../server/data/countryData");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // ======================== List of all enpoints ========================//

  // Gets user in database
  .get("/api/get-user/:userId", getUser())
  // Update user in database
  .patch("/api/update", updateUser())
  // Delete user data in database

  // Handles all the endpoints
  .get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for.",
    });
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
