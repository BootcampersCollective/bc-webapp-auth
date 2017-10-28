let express = require('express');
let router = require('./routes/routes');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let path = require('path');
require('dotenv').config();
let fs = require('fs');

const PORT = process.env.BC_AUTH_PORT || process.env.PORT || 3030;

let app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(router);

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});