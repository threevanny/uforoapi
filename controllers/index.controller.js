const indexCtrl = {};
const User = require('../models/User');

//rederizamos la pagina de inicio
indexCtrl.renderIndex = (req, res,) => {
  res.render('index', { title: 'Uforo' });
};

//rederizamos la pagina de login
indexCtrl.renderLogin = (req, res) => {
  res.render('login', { title: 'login' });
};

//rederizamos la pagina de signup
indexCtrl.renderRegister = (req, res) => {
  res.render('register', { title: 'register' });
};


//obtenemos los datos del usuario y lo guardamos en la bd
indexCtrl.registarUsuario = (req, res) => {
  const dataUser = {
    name: req.body.name,
    sexo: req.body.sexo,
    email: req.body.email,
    password: req.body.password,
  };

  const user = new User(dataUser);

  user.save((error) => {
    console.log(user);
    if (error) {
      throw error;
    }

    res.redirect('/users');
  });
}


indexCtrl.renderAbout = (req, res) => {
  res.render('about', { title: 'About' });
};

//rederizamos la pagina de con todos los usuarios
indexCtrl.renderUsers = async (req, res) => {
  const allUsers = await User.find({});
  res.render('users', { title: "Usuarios", data: allUsers });
}


module.exports = indexCtrl;