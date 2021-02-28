const User = require('../models/User')

const authCtrl = {}

authCtrl.signup = (req, res) => {
    console.log(req.body)
    const newuser = new User(req.body)
    newuser.avatar = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-car-lightning-mcqueen-13.png&f=1&nofb=1"
    newuser.points = 200
    console.log(newuser)
    if (newuser.password != newuser.password2) return res.status(400).json({ message: "password not match" })

    User.findOne({ email: newuser.email }, function (err, user) {
        if (user) return res.status(400).json({ auth: false, message: "email exits" })

        newuser.save((err, doc) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ success: false })
            }
            res.status(200).json({
                succes: true,
                user: doc
            })
        })
    })
}

authCtrl.login = (req, res) => {
    let token = req.cookies.auth || req.body.token
    User.findByToken(token, (err, user) => {
        if (err) return res(err)
        if (user) return res.status(400).json({
            error: true,
            message: "You are already logged in"
        })

        else {
            User.findOne({ 'email': req.body.email }, function (err, user) {
                if (!user) return res.json({ isAuth: false, message: ' Auth failed, email not found' })

                user.comparepassword(req.body.password, (err, isMatch) => {
                    if (!isMatch) return res.json({ isAuth: false, message: "password doesn't match" })

                    user.generateToken((err, user) => {
                        if (err) return res.status(400).send(err)
                        res.cookie('auth', user.token).json({
                            isAuth: true,
                            token: user.token,
                        })
                    })
                })
            })
        }
    })
}

authCtrl.goToProfile = (req, res) => {
    res.json({
        // isAuth: true,
        id: req.user._id,
        name: req.user.name,
        avatar: req.user.avatar,
        email: req.user.email,
        location: req.user.location,
        points: req.user.points
    })
}

authCtrl.logout = (req, res) => {
    console.log("token: ", req.token)
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err)
        res.sendStatus(200)
    })
}

module.exports = authCtrl