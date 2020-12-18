const express = require('express');
const router = express.Router();

//obtenemos las funciones del controlador
const {
  renderIndex,
} = require('../controllers/index.controller');



//Rutas principales
router.get('/', renderIndex);

module.exports = router;
