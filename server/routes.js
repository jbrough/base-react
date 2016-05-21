const logger = require('./logger');

function handler(reqId, res) {
  return (err, response) => {
    if (err) {
      logger.error({ reqId, err });
      res.status(500).end();
    } else {
      res.json(response);
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
  };
};
