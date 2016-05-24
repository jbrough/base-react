import React from 'react';
import update from 'react-addons-update';

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  _changeHandler(evt) {
    const newState = { value: evt.target.value };
    const state = update(this.state, { $merge: newState });
    this.setState(state, () => {
      this.props.handler('date', this.state.value);
    });
  }

  render() {
    return(
      <span>
        <input type='date'
               defaultValue={ this.state.value }
               onChange={ this._changeHandler.bind(this) }
        />
      </span>
    )
  }
}
