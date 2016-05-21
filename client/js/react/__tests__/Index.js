jest.autoMockOff();

import utils from 'react-addons-test-utils';

import Index from './../Index';
import React from 'react';

class FakeAgent {
  get(url) { return this; }

  timeout(ms) { return this; }

  end(cb) {
    const res = {
      body: { status: ' green' },
    };

    cb(null, res);
  }
};

describe('Index', () => {
  let get;
  let index;

  beforeEach(() => {
    const agent = new FakeAgent();
    get = spyOn(agent, 'get').and.callThrough();
    utils.renderIntoDocument(
      <Index get={ agent.get } />
    );
  })

  describe('initial load', () => {
    it('checks and sets server status', () => {
      expect(get).toHaveBeenCalledWith("/status");
      expect(index.state.status).toEqual('green');
    });
  })
});
