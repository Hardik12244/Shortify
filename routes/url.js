const express = require("express");
const router = express.Router();
const {GenerateUrl, totalAnalytics} = require("../controllers/url")
const URL = require('../models/url') 

router.post('/',GenerateUrl);

router.get('/:shortId/analytics', totalAnalytics);

router.get('/:shortId', async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{$push:{
        visitingRecord : {
            timestamp : Date.now(),
        } 
    }});
    res.redirect(entry.redirectUrl);
})


module.exports = router;