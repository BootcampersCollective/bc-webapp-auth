require('dotenv').config();
const ids = {
  github: {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
  }
}

module.exports = ids;
