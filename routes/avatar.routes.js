const express = require('express');
const router = express.Router();

const {
    getAvatar,
    getAvatars,
    newAvatar,
    updateAvatar,
    deleteAvatar
} = require('../controllers/avatar.controller');

router.get('/api/v1/avatar/:id', getAvatar);
router.get('/api/v1/avatars', getAvatars);

router.post('/api/v1/avatar/new', newAvatar);
router.put('/api/v1/avatar/update/:id', updateAvatar);
router.delete('/api/v1/avatar/delete/:id', deleteAvatar);

module.exports = router;