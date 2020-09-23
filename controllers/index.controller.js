const indexCtrl = {};

indexCtrl.renderIndex = (req, res,) => {
  res.render('index', { title: 'Uforo' });
};

indexCtrl.renderLogin = (req, res) => {
  res.render('login', { title: 'login' });
};

indexCtrl.renderRegister = (req, res) => {
  res.render('register', { title: 'register' });
};


indexCtrl.renderAbout = (req, res) => {
  res.render('about', { title: 'About' });
};


module.exports = indexCtrl;