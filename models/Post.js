const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
  texto: { type: String },
  fecha: { type: String },
  autor: { type: String },
  comentarios: { type: String }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('Post', PostSchema);