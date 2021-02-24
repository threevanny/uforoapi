const express = require('express');
const { auth } = require('../middlewares/auth');
const router = express.Router();

const {
    signup,
    login,
    logout,
    goToProfile
} = require('../controllers/auth.controller');

router.post('/api/v1/auth/signup', signup);
router.post('/api/v1/auth/login', login);
router.get('/api/v1/auth/logout', auth, logout);
router.get('/api/v1/auth/profile', auth, goToProfile);

module.exports = router;