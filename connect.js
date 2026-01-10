const mongoose = require("mongoose");

async function connectToMongo(url) {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(url, {
      bufferCommands: false,
    });
    console.log("Mongo connected");
  } catch (err) {
    console.error("Mongo connection error:", err);
    throw err;
  }
}

module.exports = connectToMongo;
