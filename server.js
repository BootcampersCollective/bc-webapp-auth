const express = require('express'),
  passport = require('passport'),
  app = express(),
  auth = require('./config/auth');
  require('dotenv').config();



auth(passport);
app.use(passport.initialize());

const port = 3030;
app.get('/', (req, res) => {
  res.json({
    status: 'session cookie not set'
  });
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.send('GOOGLE CALLBACK')
  }
);

app.listen (port, () => {
  console.log('server is up on port' + port);
});
