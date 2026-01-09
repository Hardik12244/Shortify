const session_id_map = new Map();

function setUser(id,user){
    session_id_map.set(id,user);
}

function getUser(id){
   return session_id_map.get(id);
}

module.exports = {
    setUser,
    getUser,
}