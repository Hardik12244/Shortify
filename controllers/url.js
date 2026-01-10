const shortid = require('shortid');
const URL = require('../models/url') 

async function GenerateUrl(req,res){
    const body = req.body;
    console.log(body);
    const shortId = shortid();
    if(!body.url) {
        return res.redirect("/?error=URL%20is%20required");
    }
    await URL.create({
        shortId:shortId,
        redirectUrl : body.url,
        visitingRecord : [],
        createdBy : req.user._id,

    })
    return res.render("home",{
        id : shortId
    })
}

async function totalAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalClicks : result.visitingRecord.length , analytics : result.visitingRecord})
}

    module.exports={
        GenerateUrl,
        totalAnalytics,
    }