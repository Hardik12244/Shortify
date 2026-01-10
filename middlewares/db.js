const { connectToMongo } = require("../connect");

 async function dbMiddleware(req, res, next) {
  try {
    await connectToMongo(process.env.MONGO_URL);
    next();
  } catch (err) {
    console.error("DB connection failed:", err);
    return res.status(500).send("Database connection failed");
  }
};
module.exports = {
    dbMiddleware,
}
