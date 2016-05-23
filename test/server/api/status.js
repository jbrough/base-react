import test from 'tape';
import request from 'supertest';
import app from './../../../server/app';

test('/version returns version', t => {
  request(app())
    .get('/version')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      t.notOk(err, 'does not return error');
      t.equal(parseInt(res.body.version), 1, 'has version from package.json');
      t.end();
    });
});

test('/status has green status', t => {
  request(app())
   .get('/status')
   .expect('Content-Type', /json/)
   .expect(200)
   .end((err, res) => {
     t.notOk(err, 'does not return error');
     t.equal(res.body.status, 'green', 'has green status');
     t.end();
   });
});
