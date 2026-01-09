const {getUser} = require('../services/auth');

async function restriction_login(req,res,next){
    
    const user_id = req.cookies.uid;
    if(!user_id) return res.redirect('/login')

    const user = getUser(user_id);
    if(!user) return res.redirect('/signup')
    
    req.user = user;
    next();

}

async function check_login(req,res,next){
    
    const user_id = req.cookies.uid;

    const user = getUser(user_id);
    
    req.user = user;
    next();

}

module.exports = {
    restriction_login,
    check_login,
}