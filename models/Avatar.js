const { Schema, model } = require('mongoose');

const AvatarSchema = new Schema({
    urlAvatar: { type: String },
    description: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Avatar', AvatarSchema);