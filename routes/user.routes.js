const express = require('express');
const router = express.Router();

const {
    getUser,
    getUsers,
    newUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller');

router.get('/api/v1/user/:id', getUser);
router.get('/api/v1/users', getUsers);

router.post('/api/v1/user/new', newUser);
router.put('/api/v1/user/update/:id', updateUser);
router.delete('/api/v1/user/delete/:id', deleteUser);

module.exports = router;