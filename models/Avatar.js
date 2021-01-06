const { Schema, model } = require('mongoose');

const AvatarSchema = new Schema({
    name: { type: String },
    url: { type: String },
    description: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Avatar', AvatarSchema);