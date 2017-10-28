const express = require('express');
const router = express.Router();
const passportGithub = require('../auth/github');

router.get('/github', passportGithub.authenticate('github', { scope: [ 'user:email' ]}))

router.get('/github/callback',
  passportGithub.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log(req.user)
  }
)

module.exports = router;
