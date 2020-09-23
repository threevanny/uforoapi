var express = require('express');
var router = express.Router();

const {
  renderIndex,
  renderAbout,
  renderLogin,
  renderRegister
} = require('../controllers/index.controller')



/* GET home page. */
router.get('/', renderIndex);
router.get('/login', renderLogin);
router.get('/register', renderRegister);
router.get('/about', renderAbout);

module.exports = router;
