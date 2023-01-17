const users = require('../database/users');

const getAllUsers = (req,res) => {
    res.send(users);
}

const getUserId = (req,res) => {
    const {id} = req.params;
    const user = users.find(elem => elem.id == id);
    if(user){
        res.send(user);
    }else{
        res.send("Not found");
    }
}

module.exports = {
    getAllUsers,
    getUserId
};