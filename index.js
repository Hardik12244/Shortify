require ('dotenv').config();
const express = require("express");
const {connectToMongo} = require("./connect");
const ejs = require("ejs");
const path = require("path");

const routes = require("./routes/url");
const staticrouter = require("./routes/staticrouter");
const userRoute = require('./routes/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const PORT = 3000;

app.use('/url',routes); 
app.use('/',staticrouter)
app.use('/user',userRoute);


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

connectToMongo(process.env.MONGO_URL)
    .then(()=>{
        console.log("db connected")
        app.listen(PORT,()=>console.log("Connected"))
    })
    .catch(err=>console.log(err));
