const express = require('express');
const {index, about} = require('../controllers/mainControllers');

const routerMain = express.Router();

routerMain.get('/', index);

routerMain.get('/about', about);

module.exports = routerMain;