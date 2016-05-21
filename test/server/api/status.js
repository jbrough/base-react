import test from 'tape';
import request from 'supertest';
import app from './../../../server/app';

test('/version returns version', t => {
  request(app())
    .get('/version')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.notOk(err);
      t.equal(res.body.version, '1.0.0');
      t.end();
    });
});

test('/status has green status', t => {
  request(app())
   .get('/status')
   .expect('Content-Type', /json/)
   .expect(200)
   .end((err, res) => {
     t.notOk(err);
     t.equal(res.body.status, 'green');
     t.end();
   });
});
