import test from 'tape';
import request from 'supertest';
import app from './../../../../server/app';
import SaveEvent from './../../../fakes/apis/events/save';
import Emit from './../../../fakes/io/server/emit';

function setup() {
  const emit = new Emit();
  const save = new SaveEvent('test-id');
  const apis = { events: save };
  const testApp = app({}, apis);
  testApp.locals.io = emit;

  return {
    fakes: { io: emit, apis, },
    app: testApp
  };
}

test('POST to /events returns persisted event data', t => {
  const s = setup();

  request(s.app)
    .post('/events')
    .send({ name: 'event' })
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.notOk(err);
      t.deepEqual(
        res.body,
        { event: { name: 'event' }, id: 'test-id' },
        'server responded with event data'
      );
      t.deepEqual(
        s.fakes.apis.events._calledWith(),
        { name: 'event' },
        'apis.events.save called with expected params'
      );
      t.end();
    });
});
