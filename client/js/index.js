import superagent from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './react/app';

window.React = React;

ReactDOM.render(<App get={ superagent.get } />, document.getElementById('react'));
