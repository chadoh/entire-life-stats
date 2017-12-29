import React from 'react';
import Graph from './Graph';
import Help from './Help';

const EVENTS_BY_USER_COUNT_API = 'https://entire-life.herokuapp.com/stats/events_by_user_count';

export default class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch(EVENTS_BY_USER_COUNT_API)
      .then(res => res.json())
      .then(json => {
        this.setState({data: json});
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Graph data={data} />
        <Help />
      </div>
    );
  }
}
