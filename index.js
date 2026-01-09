require ('dotenv').config();
const express = require("express");
const {connectToMongo} = require("./connect");
const ejs = require("ejs");
const path = require("path");
const cookieParser = require("cookie-parser");

const {restriction_login,check_login} = require('./middlewares/restriction')


const routes = require("./routes/url");
const staticrouter = require("./routes/staticrouter");
const userRoute = require('./routes/user');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
const PORT = 3000;

app.use('/url',restriction_login,routes); 
app.use('/',check_login,staticrouter)
app.use('/user',userRoute);


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

connectToMongo(process.env.MONGO_URL)
    .then(()=>{
        console.log("db connected")
        app.listen(PORT,()=>console.log("Connected at port 3000"))
    })
    .catch(err=>console.log(err));
