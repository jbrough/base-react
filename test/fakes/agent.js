export default class FakeAgent {
  constructor(body) {
    this.body = body;
  }

  get() { return this; }

  timeout() { return this; }

  end(cb) {
    const res = {
      body: this.body,
    };

    cb(null, res);
  }
}
