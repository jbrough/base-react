import React from 'react';

import params from './../../lib/filters';

export default class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <p>
        Searching for event times between { params(this.props.date, this.props.time, this.props.flex).text } on { this.props.date }.
      </p>
    );
  }
};
