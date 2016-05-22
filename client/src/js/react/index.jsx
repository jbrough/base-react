import React from 'react';
import ReactDOM from 'react-dom';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: null,
    };
  }

  componentDidMount() {
    this._getStatus();
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
        <p>status: {this.state.status}</p>
      </section>
    );
  }
}
