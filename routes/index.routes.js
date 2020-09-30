const express = require('express');
const router = express.Router();

//obtenemos las funciones del controlador
const {
  renderIndex,
  renderAbout,
  renderLogin,
  renderRegister,
  registarUsuario,
  renderUsers
} = require('../controllers/index.controller');



//Rutas principales
router.get('/', renderIndex);
router.get('/login', renderLogin);

router.get('/register', renderRegister);
router.post('/register', registarUsuario);
router.get('/users', renderUsers);
router.get('/about', renderAbout);

module.exports = router;
