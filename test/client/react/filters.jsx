import test from 'tape';
import React from 'react';
import sd from 'skin-deep';
import Filters from '../../../client/src/js/react/filters';

const today = new Date().toISOString().slice(0, 10);

test('initializes with default initial state', t => {
  t.plan(3);

  const tree = sd.shallowRender(
    <Filters />
  );
  const filters = tree.getMountedInstance();

  t.equal(filters.state.date, today, 'initial state date is today');
  t.equal(filters.state.time, '12:00', 'initial state time is midday');
  t.equal(filters.state.flex, '30', 'initial state flex is 30 mins');
  t.end();
})

test('changeFilter sets state', t => {
  t.plan(1);

  const tree = sd.shallowRender(
    <Filters />
  );

  const filters = tree.getMountedInstance();

  filters.changeHandler('foo', 'bar');

  t.equal(
    filters.state.foo,
    'bar',
    'updates state with specified key, value'
  )

  t.end();
});
