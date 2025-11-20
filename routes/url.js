const express = require("express");
const router = express.Router();
const {GenerateUrl} = require("../controllers/url")

router.post('/',GenerateUrl);

module.exports=router;