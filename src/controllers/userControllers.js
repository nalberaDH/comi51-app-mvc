const users = require('../database/users');
const path = require('path');



const getAllUsers = (req,res) => {
    //res.send(users);
    res.render(path.join(__dirname,'../views/users'),{'allUsers':users})
}

const getUserId = (req,res) => {
    const { id } = req.params;
    //const id = req.params.id;
    const user = users.find(elem => elem.id === parseInt(id));
    if(user){
        //res.send(user);
        res.render(path.join(__dirname,'../views/userDetail'),{user})
    }else{
        res.send("Not found");
    }
};

const search = (req,res) =>{
    
    const { name } = req.query;
    
    const user = users.filter(elem => elem.name.toUpperCase().includes(name.toUpperCase()));
    
    user.length !=0 ? res.render(path.join(__dirname,'../views/userDetail'),{user}) : res.status(404);

}


const formNewUser = (req,res) => {
    res.render(path.join(__dirname,'../views/formNewUser'));
};

const postUser = (req,res) => {
    const {
        name,
        age,
    } = req.body;
    
    const image = req.file ? req.file.filename : '';
    let newImage;
    
    if(image.length > 0){
        newImage = `images/usuarios/${image}`;
    }
    const newId = users[users.length - 1].id + 1;

    const obj = {
        id: newId,
        name,
        age,
        img: newImage
    };

    users.push(obj);
    res.redirect('/users');

};

const userEdit = (req,res) => {
    const { id } = req.params;

    const userEdit = users.find(elem => elem.id == id);

    res.render(path.join(__dirname,'../views/userEdit'),{userEdit})

}

const editConfirm = (req,res) => {
    
    users.forEach(elem => {
        if(elem.id == req.body.id){
            elem.name = req.body.name;
            elem.age = req.body.age;
            elem.img = req.body.img;
        }
    });

    res.redirect('/users');
}

module.exports = {
    getAllUsers,
    getUserId,
    search,
    formNewUser,
    postUser,
    userEdit,
    editConfirm
};