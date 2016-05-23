module.exports = class SaveEvent {
  constructor(id) {
    this._id = id;
    this._params = null;
  }

  _calledWith() {
    return this._params;
  }

  save(params, cb) {
    this._params = params;
    const data = {
      id: this._id,
      event: params,
    };

    cb(null, data);
  }
}
