//Require modules

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//Server initialization
const app = express();

//settings
//Use port 3000
app.set('port', process.env.PORT || 3000);
//set template engine
app.set('view engine', 'ejs');
//set app directories
app.set('views', path.join(__dirname, '../app/views'));

//middleware
app.use(bodyParser.urlencoded({extended: false}));

//Exports module app
module.exports = app;