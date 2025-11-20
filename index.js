const express = require("express");
const routes = require("./routes/url");
const {connectToMongo} = require("./connect");
require ('dotenv').config();

const app = express();
app.use(express.json());
const PORT = 3000;

connectToMongo(process.env.MONGO_URL)
    .then(()=>{console.log("db connected")})

app.use('/url',routes); 

app.listen(PORT,()=>console.log("Connected"))