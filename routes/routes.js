const express = require('express');
const router = express.Router();
const auth = require('../services/auth');

router.get('/', function (req, res) {
    res.send('BCC App');
});

router.get('/login', function (req, res) {
    res.send('renderLoginPage');
});

router.get('/auth/facebook/callback', function (req, res) {
    res.send('facebookCallback');
});

router.get('/auth/google/return', function (req, res) {
    res.send('googleReturn');
});

router.get('/auth/github/callback', function (req, res) {
    res.send('githubCallback');
});

router.get('/auth/linkedin/callback', function (req, res) {
    res.send('linkedinCallback');
});

router.post('/api/v1/auth', auth);

module.exports = router;