import React from 'react';
import update from 'react-addons-update';

export default class TimeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  render() {
    return(
      <span>
        <input type='time'
               defaultValue={ this.state.value }
               onChange={ this.props.handler(this, 'time') }
        />
      </span>
    )
  }
}
