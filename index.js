const express = require("express");
const app = express();

const path = require('path');


//-------------------------detault-------------------
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to my application',
}));


module.exports = app;