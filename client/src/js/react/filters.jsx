import React from 'react';

import DateFilter from './filters/date';
import TimeFilter from './filters/time';

export default class Filters extends React.Component {
  constructor(props) {
    super(props)
  }

  _changeHandler() {

  }

  render() {
    return(
      <div>
        <DateFilter />
        <TimeFilter />
      </div>
    )
  }
}
