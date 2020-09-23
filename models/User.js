const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  nombre: { type: String },
  email: { type: String },
  password: { type: String },
  edad: { type: String },
  sexo: { type: String },
  permisos: { type: String }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('User', UserSchema);