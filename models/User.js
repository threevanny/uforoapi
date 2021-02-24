const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const config = require('../config/config').get(process.env.NODE_ENV)

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    password2: {
        type: String,
        required: true,
        minlength: 8
    },
    token: {
        type: String
    },
    avatar: { type: String },
    location: { type: String },
    birthdate: { type: String },
    gender: { type: String },
    permission: { type: String },
    points: { type: Number }
}, {
    timestamps: true,
    versionKey: false
})

userSchema.pre('save', function (next) {
    var user = this
    const salt = 10

    if (user.isModified('password')) {
        bcrypt.genSalt(salt, function (err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err)
                user.password = hash
                user.password2 = hash
                next()
            })

        })
    }
    else {
        next()
    }
})

userSchema.methods.comparepassword = function (password, cb) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if (err) return cb(next)
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this
    var token = jwt.sign(user._id.toHexString(), config.SECRET)

    user.token = token
    user.save(function (err, user) {
        if (err) return cb(err)
        cb(null, user)
    })
}

userSchema.statics.findByToken = function (token, cb) {
    var user = this

    jwt.verify(token, config.SECRET, function (err, decode) {
        user.findOne({ "_id": decode, "token": token }, function (err, user) {
            if (err) return cb(err)
            cb(null, user)
        })
    })
}

userSchema.methods.deleteToken = function (token, cb) {
    var user = this

    user.updateOne({ $unset: { token: 1 } }, function (err, user) {
        if (err) return cb(err)
        cb(null, user)
    })
}

module.exports = mongoose.model('User', userSchema)