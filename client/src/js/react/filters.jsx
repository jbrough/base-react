import React from 'react';
import update from 'react-addons-update';

import DateFilter from './filters/date';
import TimeFilter from './filters/time';
import FlexFilter from './filters/flex';
import Description from './filters/description';
import params from './../lib/filters';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().slice(0, 10),
      time: '12:00',
      flex: '30',
    };
  }

  changeHandler(key, val) {
    const filter = {};
    filter[key] = val;
    const state = update(this.state, { $merge: filter });
    this.setState(state, () => {
      this._queryEvents();
    });
  }

  _queryEvents() {
    console.log(params(this.state.date, this.state.time, this.state.flex).params);
  }

  render() {
    return(
      <div>
        <DateFilter defaultValue={ this.state.date }
                    handler={ this.changeHandler.bind(this) }
        />
        <TimeFilter defaultValue={ this.state.time }
                    handler={ this.changeHandler.bind(this) }
        />
        <FlexFilter defaultValue={ this.state.flex }
                    handler={ this.changeHandler.bind(this) }
        />
        <Description date={ this.state.date }
                     time={ this.state.time }
                     flex={ this.state.flex }
        />
      </div>
    );
  }
}
