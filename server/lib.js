
/**
 * @param {Object} config
 * @param {Object} apis
 */
module.exports = () => {
  function status(cb) {
    cb(null, { status: 'green' });
  }

  return {
    status,
  };
};
