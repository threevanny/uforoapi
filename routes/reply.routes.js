const express = require('express');
const router = express.Router();

const {
    getReply,
    getReplies,
    newReply,
    updateReply,
    deleteReply
} = require('../controllers/reply.controller');

router.get('/api/v1/reply/:id', getReply);
router.get('/api/v1/replies/:id', getReplies);

router.post('/api/v1/reply/new/', newReply);
router.put('/api/v1/reply/update/:id', updateReply);
router.delete('/api/v1/reply/delete/:id', deleteReply);

module.exports = router;