const express = require('express');
const {getAllUsers, getUserId, search, formNewUser, postUser, userEdit, editConfirm} = require('../controllers/userControllers');
const routerUser = express.Router();

routerUser.get('/users',getAllUsers);
routerUser.get('/user/:id', getUserId);
routerUser.get('/search', search);

routerUser.get('/new-user',formNewUser);
routerUser.post('/new-user', postUser);

routerUser.get('/user-edit/:id', userEdit);
routerUser.put('/user-edit', editConfirm)



module.exports = routerUser;