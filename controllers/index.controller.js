const indexCtrl = {};
const User = require('../models/user');


indexCtrl.renderIndex = (req, res,) => {
  res.render('index', { title: 'Uforo' });
};

indexCtrl.renderLogin = (req, res) => {
  res.render('login', { title: 'login' });
};

indexCtrl.renderRegister = (req, res) => {
  res.render('register', { title: 'register' });
};


indexCtrl.registarUsuario = (req, res) => {
  const dataUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  const user = new User(dataUser);

  user.save((error) => {
    console.log(user);
    if (error) {
      throw error;
    }
    res.json({ message: "Data saved successfully.", status: "success" });
  });
}

indexCtrl.renderAbout = (req, res) => {
  res.render('about', { title: 'About' });
};


module.exports = indexCtrl;