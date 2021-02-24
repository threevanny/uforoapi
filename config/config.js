require('dotenv').config();

const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.DATABASE
  },
  default: {
    SECRET: 'a secret word',
    DATABASE: 'mongodb://localhost/uforo'
  }
}

exports.get = function get(env) {
  return config[env] || config.production
}