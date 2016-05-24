import React from 'react';

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props)
  }

  _changeHandler() {

  }

  render() {
    return(
      <div>
        <input type='date' onChange={this._changeHandler.bind(this)} />
      </div>
    )
  }
}
