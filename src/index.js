const express = require('express');
require('express-async-errors');
const cors = require('./app/middlewares/cors');
const routes = require('./routes');
const errorHandler = require('./app/middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use(cors);

app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3333');
});
