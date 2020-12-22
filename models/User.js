const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.']
    },
    email: {
        type: String,
        required: [true, 'A email is required'],
        index: { unique: true, dropDups: true }
    },
    password: {
        type: String,
        required: [true, 'A email is required']
    },
    avatar: { type: String },
    location: { type: String },
    birthdate: { type: String },
    gender: { type: String },
    permission: { Number: String },
    ponits: { type: Number }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', UserSchema);