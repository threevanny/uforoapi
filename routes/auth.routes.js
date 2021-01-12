const express = require('express');
const router = express.Router();

const {
    signup,
    login,
    logout
} = require('../controllers/auth.controller');

router.post('/api/v1/user/signup', signup);
router.post('/api/v1/user/login', login);
router.post('/api/v1/user/logout', logout);


module.exports = router;