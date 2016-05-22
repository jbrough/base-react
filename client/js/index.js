import superagent from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './react/app';

ReactDOM.render(<App agent={ superagent } />, document.getElementById('react'));
