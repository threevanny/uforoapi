const questionCtrl = {};

const Question = require("../models/Question");

questionCtrl.getQuestion = async(req, res) => {
    const id = req.params.id;
    const aQuestion = await Question.findById(id);

    res.json(aQuestion);
};

questionCtrl.getQuestions = async(_, res) => {
    const limit = 4;
    const allQuestions = await Question.find({}).limit(limit);

    res.json(allQuestions);
};

questionCtrl.newQuestion = async(req, res) => {
    //Before saving validate data.

    const newQuestion = new Question({
        idAutor: req.body.idAutor,
        question: req.body.question,
        tag: req.body.tag,
    });

    await newQuestion.save((err) => {
        if (err) console.error("Error saving question!");
        else
            res.json({
                status: "OK",
                message: "Question has been created",
            });
    });
};

questionCtrl.updateQuestion = async(req, res) => {
    const id = req.params.id;

    const updatedQuestion = {
        question: req.body.question,
        tag: req.body.tag,
    };

    await Question.findByIdAndUpdate(id, updatedQuestion, (err, docs) => {
        if (err) console.error("Error updating question!");
        else
            res.json({
                status: "OK",
                message: "Question has been updated",
                data: docs,
            });
    });
};

questionCtrl.deleteQuestion = async(req, res) => {
    const id = req.params.id;
    await Question.findByIdAndDelete(id, (err, docs) => {
        if (err) console.error("Error deleting question!");
        else
            res.json({
                status: "OK",
                message: "Question has been deleted",
                data: docs,
            });
    });
};

module.exports = questionCtrl;