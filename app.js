const express = require('express');
const bodyParser = require('body-parser');
// routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const analyticsRoutes = require('./routes/analytics');
const positionRoutes = require('./routes/position');
const categoryRoutes = require('./routes/category');

const app = express();

// settings of our middleware
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

// routes
app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/category', categoryRoutes);

// default route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Nice to see you! 😻'
  });
});


// for index.js
module.exports = app;