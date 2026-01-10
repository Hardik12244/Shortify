const mongoose = require("mongoose");

let isConnected = false;

async function connectToMongo(url) {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(url);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Mongo connection error:", err);
    throw err;
  }
}
