import React from 'react';
import update from 'react-addons-update';

export default class DateFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
    };
  }

  render() {
    return(
      <span>
        <input className='filter-date'
               type='date'
               defaultValue={ this.state.value }
               onChange={ this.props.handler(this, 'date') }
        />
      </span>
    )
  }
}
