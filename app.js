const express = require('express');

// routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const analyticsRoutes = require('./routes/analytics');
const positionRoutes = require('./routes/position');
const categoryRoutes = require('./routes/category');

const app = express();

// routes
app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/category', categoryRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Nice to see you! 😻'
  });
});


module.exports = app;