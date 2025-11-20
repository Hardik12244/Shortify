const express = require("express");
const routes = require("./routes/url");
const {connectToMongo} = require("./connect");

const app = express();
app.use(express.json());
const PORT = 3000;

connectToMongo("mongodb+srv://hardik12244_db_user:SsTnGj2XdSe1qafV@cluster0.mi1pa1z.mongodb.net/")
    .then(()=>{console.log("db connected")})

app.use('/url',routes); 

app.listen(PORT,()=>console.log("Connected"))