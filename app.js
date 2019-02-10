require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
// routes
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const analyticsRoutes = require('./routes/analytics');
const positionRoutes = require('./routes/position');
const categoryRoutes = require('./routes/category');
// setting keys
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
.then(() => console.log(`MLab MongoDB is connected...`.magenta))
.catch(err => console.log(`Error while conecting to MLab MongoDB: ${err}...`.red))

const app = express();

app.use(passport.initialize());
// call a function which is in middleware/passport.js file
require('./middleware/passport')(passport);
// passport.use()
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