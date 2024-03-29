const express = require("express");
const router = express.Router();

const {
    getQuestion,
    getQuestions,
    newQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionsByIdAutor
} = require("../controllers/question.controller");

router.get("/api/v1/question/:id", getQuestion);
router.get("/api/v1/questions", getQuestions);
router.get("/api/v1/questions/autor/:id", getQuestionsByIdAutor)

router.post("/api/v1/question/new/", newQuestion);
router.put("/api/v1/question/update/:id", updateQuestion);
router.delete("/api/v1/question/delete/:id", deleteQuestion);

module.exports = router;