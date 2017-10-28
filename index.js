require('dotenv').config();
let express = require('express');
const passport = require('passport');
let cookieParser = require('cookie-parser');
let path = require('path');

let fs = require('fs');


const app = express();

const routes = require('./routes/routes');

app.use(passport.initialize());

app.use('/auth/', routes);

app.listen(3030);
