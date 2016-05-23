
/**
 * @param {Object} config
 * @param {Object} apis
 */
module.exports = (_, apis) => {
  function status(cb) {
    cb(null, { status: 'green' });
  }

  function save(params, cb) {
    apis.events.save(params, cb)
  }

  return {
    status,
    save,
  };
};
