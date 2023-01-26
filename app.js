const express = require('express');
const morgan = require('morgan');
const routerMain = require('./src/routes/main');
const routerUser = require('./src/routes/user');

const methodOverride = require('method-override');

const port = process.env.PORT || 3001;

const app = express();

app.set('view engine','ejs');
//configura la carpeta estatica del proyecto
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(routerMain);
app.use(routerUser);

app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));