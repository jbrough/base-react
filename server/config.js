const yaml = require('js-yaml');
const fs = require('fs');
const ENV = process.env.NODE_ENV;

module.exports = {
  config: yaml.safeLoad(fs.readFileSync(`${__dirname}/config.yaml`, 'utf8'))[ENV],
};
