import React from 'react';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
  }

  _events() {
    return this.props.events.map((e) => <li>{ e.event.name }</li>)
  }

  render() {
    return(
      <ol>
        { this._events() }
      </ol>
    );
  }
}
