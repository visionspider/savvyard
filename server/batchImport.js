const { usersData } = require("./data/users_data");
const { weatherCodes } = require("./data/weatherCodes");
const { users } = require("./data/users");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");
const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("savvyard");
  // usersData.forEach((userData) => (userData._id = uuidv4()));
  const result = await db.collection("user_data").insertMany(usersData);
  // const result = await db.collection("users").insertMany(users);
  console.log(result);
  // const result2 = await db.collection("items").insertMany(items);
  // console.log(result2);
  client.close();
};

batchImport();
