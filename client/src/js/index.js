const superagent = require('superagent');
const io = require('socket.io-client');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./react/app').default;

ReactDOM.render(<App agent={ superagent } io={ io } />, document.getElementById('react'));
