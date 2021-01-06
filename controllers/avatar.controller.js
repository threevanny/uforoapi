const avatarCtrl = {};

const Avatar = require('../models/Avatar');

avatarCtrl.getAvatar = async(req, res,) => {
    const id = req.params.id;

    await Avatar.findById(id, (err, docs) => {
        if (err) console.error("Error getting avatar!", err);
        else res.json(docs);
    });
};

avatarCtrl.getAvatars = async (req, res,) => {
    const limit = 10;

    await Avatar.find({}, (err, docs) => {
        if (err) console.error("Error getting avatars!", err);
        else res.json(docs);
    }).limit(limit);
};

avatarCtrl.newAvatar = async (req, res,) => {
    //validate data after to save
    const newAvatar = new Avatar({
        name: req.body.name,
        url: req.body.url,
        description: req.body.description
    });

    await newAvatar.save((err) => {
        if (err) console.error("Error saving avatar!", err);
        else
            res.json({
                status: "OK",
                message: "Avatar has been created",
            });
    });
};

avatarCtrl.updateAvatar = async (req, res,) => {
    const id = req.params.id;

    const updatedAvatar = {
        name: req.body.name,
        url: req.body.url,
        description: req.body.description
    };

    await Avatar.findByIdAndUpdate(id, updatedAvatar, (err, docs) => {
        if (err) console.error("Error updating avatar!", err);
        else
            res.json({
                status: "OK",
                message: "Avatar has been updated",
                data: docs,
            });
    });
};

avatarCtrl.deleteAvatar = async (req, res,) => {
    const id = req.params.id;
    await Avatar.findByIdAndDelete(id, (err, docs) => {
        if (err) console.error("Error deleting avatar!", err);
        else
            res.json({
                status: "OK",
                message: "Avatar has been deleted",
                data: docs,
            });
    });
};

module.exports = avatarCtrl;