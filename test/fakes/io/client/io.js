export default class FakeIo {
  connect(host) {
    return new FakeSocket(host);
  }
}

class FakeListener {
  constructor(name, cb) {
    this.name = name;
    this.cb = cb;
  }

  fakeReceive(data) {
    this.cb(data);
  }
}

class FakeSocket {
  constructor(host) {
    this._host = host;
    this._listeners = [];
  }

  on(name, cb) {
    const listener = new FakeListener(name, cb);
    this._listeners.push(listener);
  }

  removeAllListeners(name) {
    const res = [];
    for (const e of this._listeners) {
      if (name !== e.name) res.push(e)
    }
    this._listeners = res;
  }
}
