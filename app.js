const express = require('express');

const port = process.env.PORT || 3001;

const app = express();


app.listen(port, () => console.log(`servidor escuchando en puerto ${port}`));