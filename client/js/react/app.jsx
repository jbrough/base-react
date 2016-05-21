import React from 'react';

import Index from './index';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='app'>
        <Index get={ this.props.get } />
      </section>
    );
  }
}
