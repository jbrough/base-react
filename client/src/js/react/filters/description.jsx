import React from 'react';

import flex from './../../lib/flex';

export default class Description extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return(
      <p>
        Searching for event times between { flex(this.props.date, this.props.time, this.props.flex) } on { this.props.date }.
      </p>
    );
  }
};
