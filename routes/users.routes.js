var express = require('express');
var router = express.Router();

const { renderUsers } = require('../controllers/users.controller');

/* GET home page. */
router.get('/u', renderUsers);


module.exports = router;

