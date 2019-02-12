const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
// models
const User = require('../models/User');
// config
const keys = require('../config/keys');
// utils
const errorHandler = require('../utils/errorHandler');

module.exports.login = async (req, res) => {
  const foundUser = await User.findOne({email: req.body.email});

  if (foundUser) {
    const isTheSamePassword = bcryptjs.compareSync(req.body.password, foundUser.password);
    if (isTheSamePassword) {
      const token = jwt.sign({
        email: foundUser.email,
        userId: foundUser._id
      }, keys.jwt, {expiresIn: 3600});

      res.status(202).send({
        token: `Bearer ${token}`
      })
    } else {
      res.status(404).json({
        "message": 'Неправильный пароль для данного email!'
      });
    }
  } else {
    res.status(404).json({
      "message": 'Ползователя с таким email не существует!'
    });
  }
};

module.exports.register = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    res.status(409).json({
      message: 'Пользователь с таким email уже существует!'
    });
  } else {
    const password = req.body.password;
    const salt = bcryptjs.genSaltSync(10);
    const user = new User({
      email: req.body.email,
      password: bcryptjs.hashSync(password, salt),
    });

    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      errorHandler(res, error);
    }
  }
};