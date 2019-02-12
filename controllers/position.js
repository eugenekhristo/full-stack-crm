// models
const Position = require('../models/Position');
// utils
const handleError = require('../utils/errorHandler');

module.exports.getByCategoryId = async (req, res) => {
  try {
    const positions = await Position.find({
      category: req.params.categoryId,
      user: req.user.id
    });

    res.status(200).json(positions);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.create = async (req, res) => {
  try {
    const position = await new Position({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
      user: req.user.id
    }).save();

    res.status(201).json(position);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.update = async (req, res) => {
  try {
    // if not specify {new: true} - it will return old value
    const position = await Position.findOneAndUpdate(
      {
        _id: req.params.id
      },
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(position);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports.remove = async (req, res) => {
  try {
    await Position.remove({ _id: req.params.id });
    res.status(200).json({
      message: 'Позиция была успешно удалена'
    });
  } catch (error) {
    handleError(res, error);
  }
};
