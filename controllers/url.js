const shortid = require("shortid"); 
const URL = require('../models/url');
function GenerateURL(req,res){
    const body = req.body;
    const shortID = shortid();
    if(!body.url) return res.status(400).json({error:"Url not found"})
    URL.create({
        shortId : shortID,
        redirectUrl : body,
        visitingRecord:[],
    });
    return res.json({id:shortId});
}
module.export = {
    GenerateURL,
}