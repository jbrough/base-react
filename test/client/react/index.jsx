import test from 'tape';
import React from 'react';
import sd from 'skin-deep';
import Index from '../../../client/src/js/react/index.jsx';
import FakeAgent from '../../fakes/agent'

function fakeAgent() {
  return new FakeAgent({ status: 'green' });
}

test('Index calls status API when mounted and sets status', t => {
  t.plan(1);

  const tree = sd.shallowRender(
    <Index agent={ fakeAgent() } />
  );
  const index = tree.getMountedInstance();
  index.componentDidMount();

  t.equal(index.state.status, 'green');
})
