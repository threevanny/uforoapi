const replyCtrl = {};

const Reply = require('../models/Reply');

replyCtrl.getReply = async (req, res,) => {
    const id = req.params.id;

    await Reply.findById(id, (err, docs) => {
        if (err) console.error("Error getting reply!", err);
        else res.json(docs);
    });
};

replyCtrl.getReplies = async (req, res,) => {
    const idQuestion = req.params.id;
    const limit = 20;

    await Reply.find({ idQuestion }, (err, docs) => {
        if (err) console.error("Error getting reply!", err);
        else res.json(docs);
    }).limit(limit);
};

replyCtrl.getCountReplies = async (req, res,) => {
    const idQuestion = req.params.id;

    await Reply.countDocuments({ idQuestion }, (err, docs) => {
        if (err) console.error("Error getting reply!", err);
        else res.json(docs);
    })
};

replyCtrl.newReply = async (req, res,) => {
    console.log(res.body)
    const newReply = new Reply({
        idAutor: req.body.idAutor,
        idQuestion: req.body.idQuestion,
        reply: req.body.reply
    });
    await newReply.save((err) => {
        if (err) console.error("Error saving reply!", err);
        else
            res.json({
                isOk: true,
                message: `Reply with id ${newReply._id} has been created`,
            });
    });
};
replyCtrl.updateReply = async (req, res,) => {
    const id = req.params.id;

    const updatedReply = {
        reply: req.body.reply,

    };

    await Reply.findByIdAndUpdate(id, updatedReply, (err, docs) => {
        if (err) console.error("Error updating reply!", err);
        else
            res.json({
                status: "OK",
                message: "Reply has been updated",
                data: docs,
            });
    });
};

replyCtrl.deleteReply = async (req, res,) => {
    const id = req.params.id;
    await Reply.findByIdAndDelete(id, (err, docs) => {
        if (err) console.error("Error deleting reply!", err);
        else
            res.json({
                status: "OK",
                message: "Reply has been deleted",
                data: docs,
            });
    });

};

module.exports = replyCtrl;