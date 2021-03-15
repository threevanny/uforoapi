const User = require('../models/User')
const Question = require('../models/Question')

const authCtrl = {}

let avatars = [
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fclipart-car-lightning-mcqueen-13.png&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20150112020320%2Fpixar%2Fimages%2F3%2F35%2F77465-Francesco-Bernoulli-Cars-2.jpg&f=1&nofb=1",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fpixar%2Fimages%2Fe%2Fe1%2FTowMaterCars3Artwork.jpg%2Frevision%2Flatest%3Fcb%3D20170430135416&f=1&nofb=1",
]

const getAvatar = (array) => {
    let random = Math.round(Math.random() * (2))
    return array[random];
}

authCtrl.signup = (req, res) => {
    console.log(req.body)
    const newuser = new User(req.body)
    newuser.avatar = getAvatar(avatars)
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
                            id: user._id,
                            token: user.token,
                        })
                    })
                })
            })
        }
    })
}

authCtrl.goToProfile = (req, res) => {
    Question.countDocuments({ idAutor: req.user._id }, (err, docs) => {
        if (err) {
            res.json({
                // isAuth: true,
                id: req.user._id,
                name: req.user.name,
                avatar: req.user.avatar,
                email: req.user.email,
                location: req.user.location,
                points: req.user.points
            })
        } else {
            res.json({
                // isAuth: true,
                id: req.user._id,
                name: req.user.name,
                avatar: req.user.avatar,
                email: req.user.email,
                location: req.user.location,
                points: req.user.points,
                questions: docs
            })
        }
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