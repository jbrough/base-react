import io from 'socket.io-client';
import React from 'react';

import Events from './events';
import Filters from './filters';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
      socket: null,
      subscribed: false,
      events: [],
    };
  }

  componentDidMount() {
    this._getStatus();
  }

  _connectSocket(cb) {
    this.setState({
      socket: this.props.io.connect('http://localhost:8080'),
    }, cb);
  }

  _handleSubscribe(e) {
    const checked = e.target.checked;
    this.setState({
      subscribed: checked
    }, () => {
      checked ? this._subscribe() : this._unsubscribe();
    });
  }

  _isSubscribed() {
    return this.state.subscribed;
  }

  _subscribe() {
    const subscribe = () => this.state.socket.on('events', this._listner.bind(this));

    if (!this.state.socket) {
      this._connectSocket( () => { subscribe() })
    } else {
      subscribe()
    }
  }

  _unsubscribe() {
    this.state.socket.removeAllListeners('events');
  }

  _listner(data) {
    const events = this.state.events.concat([]);
    events.push(data);
    this.setState({ events: events });
  }

  _error() {
    this.setState({
      status: 'error',
    });
  }

  _getStatus() {
    this.props.agent
      .get('/status')
      .end((err, res) => {
        if (err) return this._error();

        this.setState({
          status: res.body.status,
        });
      });
  }

  render() {
    return(
      <section className='index'>
        <Filters />
        <p>status: {this.state.status}</p>
        <p>
          Listen for messages
          <input  type='checkbox'
                  checked={ this._isSubscribed() }
                  onChange={ this._handleSubscribe.bind(this) }
          />
        </p>
        <Events events={ this.state.events } />
      </section>
    );
  }
}
