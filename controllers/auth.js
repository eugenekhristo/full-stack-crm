const User = require('../models/User');

module.exports.login = (req, res) => {

};

module.exports.register = (req, res) => {
  const candidate = User.findOne({emal: req.body.email});

  if (candidate) {
    res.status(409).json({
      message: 'Пользователь с таким email уже существует!'
    });
  }
};