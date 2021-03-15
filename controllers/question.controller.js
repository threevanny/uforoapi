const questionCtrl = {};

const Question = require("../models/Question")
const Reply = require("../models/Reply")

questionCtrl.getQuestion = async (req, res) => {
    const id = req.params.id;

    await Question.findById(id, (err, docs) => {
        if (err) console.error("Error getting question!", err);
        else res.json(docs);
    });
};

questionCtrl.getQuestions = async (_, res) => {
    const limit = 15;

    await Question.find({}, (err, qDocs) => {
        if (err) console.error("Error getting questions!", err)
        else res.json(qDocs)
    }).limit(limit).sort({ createdAt: "desc" });

};

questionCtrl.getQuestionsByIdAutor = async (req, res) => {
    const id = req.params.id;
    limit = 10

    await Question.find({ idAutor: id }, (err, docs) => {
        if (err) console.error("Error getting question!", err);
        else res.json(docs);
    }).limit(limit).sort({ createdAt: "desc" });
}

questionCtrl.newQuestion = async (req, res) => {
    //validate data after to save
    const newQuestion = new Question({
        idAutor: req.body.idAutor,
        question: req.body.question,
        tag: req.body.tag,
    });

    await newQuestion.save((err) => {
        if (err) console.error("Error saving question!", err);
        else
            res.json({
                OK: true,
                message: "Question has been created",
            });
    });
};

questionCtrl.updateQuestion = async (req, res) => {
    const id = req.params.id;

    const updatedQuestion = {
        question: req.body.question,
        tag: req.body.tag,
    };

    await Question.findByIdAndUpdate(id, updatedQuestion, (err, docs) => {
        if (err) console.error("Error updating question!", err);
        else
            res.json({
                OK: true,
                message: "Question has been updated",
                data: docs,
            });
    });
};

questionCtrl.deleteQuestion = async (req, res) => {
    const id = req.params.id;
    await Question.findByIdAndDelete(id, (err, docs) => {
        if (err) console.error("Error deleting question!", err);
        else
            res.json({
                status: "OK",
                message: "Question has been deleted",
                data: docs,
            });
    });
};

module.exports = questionCtrl;