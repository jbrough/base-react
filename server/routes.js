const logger = require('./logger');

function handler(reqId, res, emit) {
  return (err, response) => {
    if (err) {
      logger.error({ reqId, err });
      res.status(500).end();
    } else {
      res.json(response);
      if (emit) emit(response);
    }
  };
}

module.exports = function (lib) {
  return {
    status: (req, res) => {
      lib.status(handler(req.id, res));
    },
    version: (req, res) => {
      res.json({ version: process.env.npm_package_version });
    },
    event: (req, res) => {
      const emit = (data) => req.app.locals.io.sockets.emit('events', data);
      lib.save(req.body, handler(req.id, res, emit));
    }
  };
};
