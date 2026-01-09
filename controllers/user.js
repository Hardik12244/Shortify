const {v4:uuid} = require('uuid');
const User = require('../models/user');
const {setUser} = require('../services/auth')

async function handleUserSignUp(req,res){
    const {name,email,password}= req.body;

    await User.create({
        name,
        email,
        password
    })
    return res.redirect("/");
}

async function handleUserLogin(req,res){
    const {email,password}= req.body;
    const user = await User.findOne({email,password});
    if(!user) 
        return res.render("signup",{
        error : "Invalid Credentials"
    });
    const id = uuid();
    setUser(id,user);
    res.cookie("uid",id);   
    return res.redirect("/");

}
module.exports={
    handleUserSignUp,
    handleUserLogin,
}