const passport = require('passport');
const GoogleStrategy = require('passport-google').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const LinkedInStrategy = require('passport-linkedin').Strategy;
require('dotenv').config();

class AuthProviders {
    constructor (provider) {
        this.setup = this[provider]();
    }

    facebook() {
        return new FacebookStrategy({
                clientID: process.env.FACEBOOK_APP_ID,
                clientSecret: process.env.FACEBOOK_APP_SECRET,
                callbackURL: process.env.FACEBOOK_APP_CALLBACK
            },
            function (accessToken, refreshToken, profile, cb) {
                User.findOrCreate({facebookId: profile.id}, function (err, user) {
                    return cb(err, user);
                });
            });
    }

    google() {
        return new GoogleStrategy({
                returnURL: process.env.GOOGLE_RETURN_URL,
                realm: process.env.GOOGLE_REALM
            },
            function (identifier, done) {
                User.findByOpenID({openId: identifier}, function (err, user) {
                    return done(err, user);
                });
            });
    }

    github() {
        return new GitHubStrategy({
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: process.env.GITHUB_CLIENT_CALLBACK
            },
            function (accessToken, refreshToken, profile, done) {
                User.findOrCreate({githubId: profile.id}, function (err, user) {
                    return done(err, user);
                });
            });
    }

    linkedin() {
        return new LinkedInStrategy({
                consumerKey: process.env.LINKEDIN_API_KEY,
                consumerSecret: process.env.LINKEDIN_SECRET_KEY,
                callbackURL: process.env.LINKEDIN_CALLBACK
            },
            function (token, tokenSecret, profile, done) {
                User.findOrCreate({linkedinId: profile.id}, function (err, user) {
                    return done(err, user);
                });
            });
    }
}

module.exports = AuthProviders;