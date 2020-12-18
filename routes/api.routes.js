const express = require('express');
const router = express.Router();

//require all functions from controller

const {
    getUser,
    getUsers,
    getQuestion,
    getQuestions,
    getReply,
    getReplies,
    getAvatar,
    getAvatars
} = require('../controllers/api.controller');


router.get('/api/v1/user/:id', getUser);
router.get('/api/v1/users/', getUsers);
router.get('/api/v1/question/:id', getQuestion);
router.get('/api/v1/questions/', getQuestions);
router.get('/api/v1/reply/:id', getReply);
router.get('/api/v1/replies/', getReplies);
router.get('/api/v1/avatar/:id', getAvatar);
router.get('/api/v1/avatars/', getAvatars);

module.exports = router;