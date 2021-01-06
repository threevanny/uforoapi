const userCtrl = {};

const User = require('../models/User');

userCtrl.getUser = async (req, res,) => {

    const id = req.params.id;

    await User.findById(id, (err, docs) => {
        if (err) console.error("Error getting user!", err);
        else res.json(docs);
    });

};

userCtrl.getUsers = async (req, res,) => {
    const limit = 10;

    await User.find({}, (err, docs) => {
        if (err) console.error("Error getting user!", err);
        else res.json(docs);
    }).limit(limit);

};

userCtrl.newUser = async (req, res) => {
    //validate data after to save
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
    });


    await newUser.save((err) => {
        if (err) console.error("Error saving question!", err);
        else
            res.json({
                status: "OK",
                message: "User has been created",
            });
    });
};

userCtrl.updateUser = async (req, res) => {
    const id = req.params.id;

    const updatedUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
    }

    await User.findByIdAndUpdate(id, updatedUser, (err, docs) => {
        if (err) console.error("Error updating user!", err);
        else
            res.json({
                status: "OK",
                message: "User has been updated",
                data: docs,
            });
    });
};

userCtrl.deleteUser = async (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id, (err, docs) => {
        if (err) console.error("Error deleting user!", err);
        else
            res.json({
                status: "OK",
                message: "User has been deleted",
                data: docs,
            });
    });
};

module.exports = userCtrl;