require('colors');
const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`NodeJs server is running on port ${port}...`.yellow)
);
