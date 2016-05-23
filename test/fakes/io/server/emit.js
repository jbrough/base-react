export default class Emit {
  constructor() {
    this._namespace = null;
    this._msg = null;
    this.sockets = this;
  }

  emit(namespace, msg) {
    this._namespace = namespace;
    this._msg = msg;
  }
}
