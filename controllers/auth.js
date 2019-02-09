const bcryptjs = require('bcryptjs');
// models
const User = require('../models/User');

module.exports.login = (req, res) => {

};

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    res.status(409).json({
      message: 'Пользователь с таким email уже существует!'
    });
  } else {
    const password = req.body.password;
    const salt = bcryptjs.genSaltSync();
    const user = new User({
      email: req.body.email,
      password: bcryptjs.hashSync(password, salt),
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  }
};