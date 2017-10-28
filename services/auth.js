const passport = require('passport');
const AuthProviders = require('./auth-providers');

const authenticate = (req, res) => {
    let provider = req.body.provider;
    // TODO: check provider is one of the accepted ones
    if (provider) {
        let providerInstance = new AuthProviders(provider);
        passport.use(providerInstance.setup);
        passport.authenticate(provider, { failureRedirect: '/login' });
        res.redirect('/');
    } else {
        res.redirect('/login');
    }

};

module.exports = authenticate;