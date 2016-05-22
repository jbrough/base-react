import React from 'react';

import Index from './index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='app'>
        <Index agent={ this.props.agent } />
      </section>
    );
  }
}
