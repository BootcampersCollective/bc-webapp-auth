const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const ids = require('../config/ids')
const { github } = ids;
passport.use(new GitHubStrategy ({
  clientID: github.clientID,
  clientSecret: github.clientSecret,
  callbackURL: "http://localhost:3030/auth/github/callback"
},
  (accessToken, refreshToken, profile, done) => {
    if(err) {
      return done(null, user)
    }
  }
));

module.exports = passport;
