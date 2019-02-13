// models
const Category = require('../models/Category');
const Position = require('../models/Position');
// utils
const handleError = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
  try {
    const categories = await Category.find({user: req.user});
    res.status(200).json(categories);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.getById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    await Position.remove({category: req.params.id});
    res.status(200).json(category);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.create = (req, res) => {
  try {
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.update = (req, res) => {
  try {
  } catch (error) {
    handleError(res, error);
  }
};
