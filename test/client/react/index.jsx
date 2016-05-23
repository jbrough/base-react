import test from 'tape';
import React from 'react';
import sd from 'skin-deep';
import Index from '../../../client/src/js/react/index.jsx';
import FakeAgent from '../../fakes/agent';
import FakeIo from '../../fakes/io/client/io';

function fakeAgent() {
  return new FakeAgent({ status: 'green' });
}

function fakeIo() {
  return new FakeIo();
}


test('Index calls status API when mounted and sets status', t => {
  t.plan(1);

  const tree = sd.shallowRender(
    <Index agent={ fakeAgent() } />
  );
  const index = tree.getMountedInstance();
  index.componentDidMount();

  t.equal(index.state.status, 'green');
  t.end();
})


test('Listens for events when subscribe selected', t => {
  t.plan(2);

  const io = new FakeIo();

  const tree = sd.shallowRender(
    <Index io={ io } />

  );
  const index = tree.getMountedInstance();

  function tickCheckbox() {
    tree.subTree('input').props.onChange(
      { target: { checked: true } }
    );
  }

  tickCheckbox()

  t.equal(
    index.state.socket._host,
    'http://localhost:8080',
    'sets socket host'
  )

  index.state.socket._listeners[0].fakeReceive({ name: 'fake event 1' });
  index.state.socket._listeners[0].fakeReceive({ name: 'fake event 2' });

  t.deepEqual(
    index.state.events,
    [{ name: 'fake event 1' }, { name: 'fake event 2'}],
    'adds emitted events to state events array'
  )

  t.end();
})


test('calls removeAllListeners for events when subscribe deselected', t => {
  t.plan(2);

  const io = new FakeIo();

  const tree = sd.shallowRender(
    <Index io={ io } />
  );

  const index = tree.getMountedInstance();

  function changeCheckbox(checked) {
    tree.subTree('input').props.onChange(
      { target: { checked: checked } }
    );
  }

  changeCheckbox(true)
  t.equal(index.state.socket._listeners.length, 1, 'listener is added once checkbox selected')

  changeCheckbox(false)
  t.equal(index.state.socket._listeners.length, 0, 'listener is removed once checkbox deselected')

  t.end();
})
