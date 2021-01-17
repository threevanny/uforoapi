const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport')
const { matchPassword } = require('./hashPassword');


passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'User Not Found' });
        } else {
            const match = await matchPassword(password, user.password);
            if (match) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect Password' });
            }
        }
    } catch (error) {
        console.error('User authentication failed', error);
    }

}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

/*
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});


passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        //match user
        User.findOne({ email: email })
            .then((user) => {
                if (!user) {
                    return done(null, false, { message: 'email not registered' });
                }
                //math passwords
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'password incorrect' });
                    }
                })
            })
            .catch((err) => { console.log(err) })
    })
)
passport.serializeUser(function (user, done) {
    done(null, user.id);
})
passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    })
})
*/