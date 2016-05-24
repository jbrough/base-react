import React from 'react';
import update from 'react-addons-update';

export default class TimeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  _changeHandler(evt) {
    const val = evt.target.value;
    if (!val) return;

    const newState = { value: val };
    const state = update(this.state, { $merge: newState });
    this.setState(state, () => {
      this.props.handler('time', this.state.value);
    });
  }

  render() {
    return(
      <span>
        <input type='time'
               defaultValue={ this.state.value }
               onChange={ this._changeHandler.bind(this) }
        />
      </span>
    )
  }
}
