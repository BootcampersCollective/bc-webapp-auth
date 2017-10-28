let express = require('express');
let morgan = require('morgan');
let cookieParser = require('cookie-parser');
let path = require('path');
let routes = require('./routes/routes');

let fs = require('fs');
let passport = require('passport')
let LinkedInStrategy = require('passport-linkedin').Strategy

let app = express();
let PORT = process.env.port || 3000;

// include static routes for serving up static html files.
app.use(express.static('public'));

// setup the logger
app.use(morgan('dev'));

// call our routes
routes(app);

app.listen(PORT, function(err){
    if(err) {
        console.log("Server Error: ",err);
        process.exit(1);
    } else {
        console.log("Server is up on port " + PORT);
    }
});

// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
