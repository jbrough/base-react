import React from 'react';
import update from 'react-addons-update';

export default class FlexFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  _flexibility() {
    return(
      <select defaultValue={ this.state.value }
              onChange={ this.props.handler(this, 'flex') }
      >

        <option value="30">+/- 30 mins</option>
        <option value="60">+/- 1 hour</option>
        <option value="120">+/- 2 hours</option>
        <option value="180">+/- 3 hours</option>
        <option value="240">+/- 4 hours</option>
        <option value="+60">+ 1 hour</option>
        <option value="+120">+ 2 hours</option>
        <option value="+180">+ 3 hours</option>
        <option value="+240">+ 4 hours</option>
        <option value="-60">- 1 hour</option>
        <option value="-120">- 2 hours</option>
        <option value="-180">- 3 hours</option>
        <option value="-240">- 4 hours</option>
      </select>
    );
  }

  render() {
    return(
      <span>
        { this._flexibility() }
      </span>
    )
  }
}
