const express = require('express');

// routes
const authRoutes = require('./routes/auth');

const app = express();

// routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Nice to see you! 😻'
  });
});


module.exports = app;