const authCtrl = {};

const User = require('../models/User');
const passport = require('passport');
const { hashPassword } = require('../auth/hashPassword');

authCtrl.signup = async (req, res,) => {
    // const errors = [];

    const { name, email, password } = req.body;
    console.log(name, email, password)
    if (false) {
        res.json({
            status: "ERROR",
            message: '',
            errors: errors
        });
    } else {
        User.findOne({ email: email }).exec(async (err, user) => {
            if (user) {
                res.json({
                    status: "ERROR",
                    message: `Email ${email} already registered`
                });
            } else {

                const newUser = new User({ name, email, password });
                newUser.password = await hashPassword(password);
                console.log(newUser)

                newUser.save().then(docs => {
                    res.json({
                        status: "OK",
                        message: 'You have now registered!',
                        data: docs
                    });
                }).catch(err => console.error(err));
            }
        });
    };
}

authCtrl.login = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
});

authCtrl.logout = (req, res) => {
    req.logout();
    res.json({
        status: "OK",
        message: 'Session ended successfully',
    });
};


module.exports = authCtrl;