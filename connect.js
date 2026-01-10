const mongoose = require("mongoose");

let isConnected = false;

async function connectToMongo(url) {
  if (isConnected) return;

  await mongoose.connect(url);
  isConnected = true;
  console.log("Mongo connected");
}

module.exports = {
  connectToMongo,
};