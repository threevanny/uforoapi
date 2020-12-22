const userCtrl = {};

const User = require('../models/User');

userCtrl.getUser = (req, res, ) => {

    //...

    res.json({
        "status": "OK",
        "message": `Getting a user with id ${req.params.id}`
    });
};

userCtrl.getUsers = (req, res, ) => {

    //...

    res.json({
        "status": "OK",
        "message": "Getting Users"
    });
};

userCtrl.newUser = (req, res) => {

    const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    console.log(newuser);

    res.json({
        "status": "OK",
        "message": "User has been created"
    });
};

userCtrl.updateUser = (req, res) => {

    //...

    res.json({
        "status": "OK",
        "message": `Updating user with id ${req.params.id}`
    });
};

userCtrl.deleteUser = (req, res) => {

    //...

    res.json({
        "status": "OK",
        "message": `Deleting user with id ${req.params.id}`
    });
};

module.exports = userCtrl;