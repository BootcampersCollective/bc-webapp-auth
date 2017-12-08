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

app.use(express.static('./public'))
app.use(cookieParser());

//PASSPORT & FACEBOOK - - - - - --- --- ------- ---------- -------------- 

//DOCS -  -  http://www.passportjs.org/docs/facebook

let passport = require('passport')
app.use(passport.initialize());
let FacebookStrategy = require('passport-facebook').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: //client ID needs updated,
    clientSecret: //client secret needs updated,
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    //
    return done(null, profile)
  }
));

//routes - - - --- ------- ------------ ---------------

// Facebook will redirect the user back to the application at /auth/facebook/callback

app.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.

app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/home', failureRedirect: '/' }), function(req, res){
	console.log(req.user, 'user')
});

app.get('/home', function(req, res) {
	res.send('<p>logged in</p>')
})

app.listen(3000, function(){
	console.log('localhost:3000')
})
