import React from 'react';

export default class TimeFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  _changeHandler() {

  }

  render() {
    return(
      <div>
        <input type='time' onChange={this._changeHandler.bind(this)} />
      </div>
    )
  }
}
