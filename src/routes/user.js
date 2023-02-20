const express = require('express');
const {getAllUsers,
    getUserId,
    search,
    formNewUser,
    postUser,
    userEdit,
    editConfirm,
    admin
} = require('../controllers/userControllers');
const routerUser = express.Router();
const isAdmin = require('../middleware/adminMiddleware');

const {body} = require('express-validator');

const validateForm = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('age').notEmpty().withMessage('La edad es requerida'),
    
]

const path = require('path');
const multer = require('multer');

/*consfiguraciones de multer*/
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'../../public/images/usuarios'))
    },
    filename: (req, file, cb) => {
        const newFile = `user-${Date.now()}_img${path.extname(file.originalname)}`
        //const newFile = "user-" + Date.now() + "_img" + path.extname(file.originalname);
        cb(null,newFile);
    }
});
//instancio multer
const upload = multer({storage});

routerUser.get('/users',getAllUsers);
routerUser.get('/user/:id', getUserId);
routerUser.get('/search', search);

routerUser.get('/new-user',formNewUser);
routerUser.post('/new-user', upload.single('img'),validateForm ,postUser);

routerUser.get('/user-edit/:id', userEdit);
routerUser.put('/user-edit', upload.single('img'),validateForm, editConfirm)

routerUser.get('/admin',isAdmin ,admin);

module.exports = routerUser;