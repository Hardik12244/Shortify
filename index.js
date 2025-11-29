const express = require("express");
const routes = require("./routes/url");
const {connectToMongo} = require("./connect");
const ejs = require("ejs");
const path = require("path");
const staticrouter = require("./routes/staticrouter")

require ('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const PORT = 3000;

connectToMongo(process.env.MONGO_URL)
    .then(()=>{console.log("db connected")})

    
app.use('/url',routes); 
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use('/',staticrouter)
app.listen(PORT,()=>console.log("Connected"))