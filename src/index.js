const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());

app.use((request, response, next) => {
  request.appId = 'Meu app ID';

  next();
});

app.use(routes);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server running on port 3333');
});
