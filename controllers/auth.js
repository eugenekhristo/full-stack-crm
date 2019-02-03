module.exports.login = (req, res) => {
  res.status(200).json({
    message: 'Hello from login! 🙋‍♀️'
  });
};

module.exports.register = (req, res) => {
  res.status(200).json({
    message: 'Hello from register!  🙏️'
  });
};