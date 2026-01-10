const User = require('../models/user');
const {setUser} = require('../services/auth')

async function handleUserSignUp(req,res){
    const {name,email,password}= req.body;

    const user = await User.create({
        name,
        email,
        password
    })
    const token = setUser(user);
    res.cookie("uid",token,{
        httpOnly:true,
        secure:true,
        sameSite:"None",
    });  
    return res.redirect("/");
}

async function handleUserLogin(req,res){
    const {email,password}= req.body;
    const user = await User.findOne({email,password});
    if(!user) 
        return res.render("signup",{
        error : "Invalid Credentials"
    });
    const token = setUser(user);
    res.cookie("uid",token,{
        httpOnly:true,
        secure:true,
        sameSite:"None",
    });   
    return res.redirect("/");

}
module.exports={
    handleUserSignUp,
    handleUserLogin,
}