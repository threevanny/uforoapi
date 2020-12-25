const questionCtrl = {};

const Question = require("../models/Question");

questionCtrl.getQuestion = (req, res) => {
    //..
};

questionCtrl.getQuestions = (req, res) => {
    //..
};

questionCtrl.newQuestion = (req, res) => {
    const newQuestion = new Question({
        idAutor: req.body.idAutor,
        question: req.body.question,
        tag: req.body.tag,
    });

    console.log(newQuestion);

    res.json({
        status: "OK",
        message: "Question has been created",
    });
};

questionCtrl.updateQuestion = (req, res) => {
    //..
};

questionCtrl.deleteQuestion = (req, res) => {
    //..
};

module.exports = questionCtrl;