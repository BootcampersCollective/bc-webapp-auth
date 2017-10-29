require('dotenv').config();
let express = require('express');
let router = require('./routes/routes');
let morgan = require('morgan');
const passport = require('passport');
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

const routes = require('./routes/routes');

app.use(passport.initialize());

app.use('/auth/', routes);

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT + '!');
});
