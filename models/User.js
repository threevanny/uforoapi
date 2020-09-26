const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'Nombre de usuario requerido.']
  },
  email: {
    type: String, required: 'Email requerido',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: { unique: true, dropDups: true }
  },
  password: {
    type: String,
    required: [true, 'Password requerida.']
  },
  edad: { type: String },
  sexo: { type: String },
  permisos: { type: String }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('User', UserSchema);