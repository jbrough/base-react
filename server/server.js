const bunyan = require('bunyan');
const bunyanRequest = require('bunyan-request');

const config = require('./config');
const apis = require('./apis')(config.apis);
const app = require('./app')(config.app, apis);

const appName = process.env.npm_package_name;
const appVersion = process.env.npm_package_version;
const port = process.env.PORT || 8080;

const requestLogger = bunyanRequest({
  logger: bunyan.createLogger({ name: `${appName}-req` }),
  headerName: 'x-request-id',
});

app.use(requestLogger);
app.listen(port);

console.log(`${appName} ${appVersion} listening on ${port}`);
