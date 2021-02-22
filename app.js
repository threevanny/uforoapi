const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const passport = require('passport');
const cors = require('cors');

const indexRouter = require('./routes/index.routes');
const userRouter = require('./routes/user.routes');
const quetionRouter = require('./routes/question.routes');
const replyRouter = require('./routes/reply.routes');
const avatarRouter = require('./routes/avatar.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

//passport config:
require('./auth/passport')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(indexRouter);
app.use(userRouter);
app.use(quetionRouter);
app.use(replyRouter);
app.use(avatarRouter);
app.use(authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

//database
require('./database');

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;