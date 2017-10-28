const LinkedInStrategy = require('../controllers/controller'),
      path = require('path');

module.exports = (app) => {


//
// ────────────────────────────────────────────────────────────────  ──────────
//   :::::: B A C K   E N D   R O U T E S : :  :   :    :      :          :
// ──────────────────────────────────────────────────────────────────────────
//

    app.get('/api/auth/linkedin', LinkedInStrategy.get);         // get one
    // app.get('*', function (req, res) {
    //     res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
    // });
};
