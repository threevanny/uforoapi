const { Schema, model } = require('mongoose');

const ReplySchema = new Schema({
    idAutor: { type: String },
    idQuestion: { type: String },
    reply: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Reply', ReplySchema);