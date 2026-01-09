const mongoose = require("mongoose");
const {Schema} = mongoose;

const ulrSchema = new Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    redirectUrl:{
        type:String,
        required:true,
    },
    visitingRecord:[{timestamp:{type:Number}},],
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        },
    },
    {timestamps:true},
);

const URL = mongoose.model('url',ulrSchema);
module.exports = URL;