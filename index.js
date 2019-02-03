require('colors');
const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(5000, () =>
  console.log(`NodeJs server is running on port ${port}...`.cyan)
);
