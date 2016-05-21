const express = require('express');
const bodyParser = require('body-parser');
const reqId = require('express-request-id')();

const routing = require('./routes');
const lib = require('./lib');

module.exports = (logger, config, apis) => {
  const routes = routing(lib(config, apis));
  const app = express();

  app.use(reqId);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  }));
  app.use(bodyParser.json());

  app.use(express.static('./dist/public/client'));

  app.get('/up', (req, res) => res.send('OK'));
  app.get('/version', routes.version);
  app.get('/status', routes.status);

  return app;
};
