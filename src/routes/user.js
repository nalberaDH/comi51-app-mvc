const express = require('express');
const {getAllUsers, getUserId} = require('../controllers/userControllers');

const routerUser = express.Router();

routerUser.get('/users',getAllUsers);
routerUser.get('/user/:id', getUserId);

module.exports = routerUser;