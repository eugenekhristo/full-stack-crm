require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const analyticsRoutes = require('./routes/analytics');
const positionRoutes = require('./routes/position');
const categoryRoutes = require('./routes/category');
// setting keys
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
.then(() => console.log(`MLab MongoDB is onnected...`.magenta))
.catch(err => console.log(`Error while conecting to MLab MongoDB: ${err}...`.red))

const app = express();

// settings of our middleware
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/position', positionRoutes);
app.use('/api/category', categoryRoutes);

// default route
app.get('/', (req, res) => {
  res.status(404).json({
    message: 'Nice to see you! 😻'
  });
});


// for index.js
module.exports = app;