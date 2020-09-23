const userCtrl = {};

userCtrl.renderUsers = (req, res) => {
  res.json({ msg: "'Estos son los usuarios'" });
};

module.exports = userCtrl;
