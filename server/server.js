const bunyan = require('bunyan');
const bunyanRequest = require('bunyan-request');
const socketio = require('socket.io');
const config = require('./config');
const apis = require('./apis')(config.apis);


// live APIs not implemented, so using fakes
const SaveEvent = require('./../test/fakes/apis/events/save');
const fakeSave = new SaveEvent('test-id');
const fakeApis = { events: fakeSave };

const app = require('./app')(config.app, fakeApis);

const appName = process.env.npm_package_name;
const appVersion = process.env.npm_package_version;
const port = process.env.PORT || 8080;

app.use(bunyanRequest({
  logger: bunyan.createLogger({ name: `${appName}-req` }),
  headerName: 'x-request-id',
}));

app.locals.io = socketio(app.listen(port));

console.log(`${appName} ${appVersion} listening on ${port}`);
