const indexCtrl = {};

indexCtrl.renderIndex = (req, res,) => {
  res.render('index', { title: 'Uforo API' });
};

module.exports = indexCtrl;