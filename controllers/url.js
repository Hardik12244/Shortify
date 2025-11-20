const shortid = require('shortid');
const URL = require('../models/url') 

function GenerateUrl(req,res){
    const body = req.body;
    const shortId = shortid();
    if(!body.url) return res.status(400).json({error : "Url not found"})

    URL.create({
        shortId:shortId,
        redirectUrl : body.url,
        viewRecord : [],
    })
    return res.json({
        id:shortId,
    })
    }

    module.exports={
        GenerateUrl,
    }