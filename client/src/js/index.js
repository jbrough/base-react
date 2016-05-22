const superagent = require('superagent');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./react/app').default;

ReactDOM.render(<App agent={ superagent } />, document.getElementById('react'));
