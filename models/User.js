const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Nombre de usuario requerido.']
  },
  email: {
    type: String, required: 'Email requerido',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Digita un email valido.'],
    index: { unique: true, dropDups: true }
  },
  password: {
    type: String,
    required: [true, 'Password requerida.']
  },
  edad: { type: String },
  sexo: { type: String },
  permisos: { type: String },
  puntos: { type: Number }
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('User', UserSchema);