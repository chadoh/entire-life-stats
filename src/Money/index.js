import React from 'react';
import AllTimeRevenue from './AllTimeRevenue';
import GoalProgress from './GoalProgress';
import Help from './Help';

const MONEY_API = 'https://entire-life.herokuapp.com/stats/money';

const toDate = str => {
  const [year, month, day] = str.split("T")[0]
    .split("-").slice(0, 3).map(Number);

  return new Date(year, month - 1, day);
};

const toDatum = (multiplier = 1) => datum => ({
  date: toDate(datum.date),
  amount: multiplier * datum.amount / 100,
});

export default class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch(MONEY_API)
      .then(res => res.json())
      .then(json => {
        this.setState({data: {
          in: json.in.map(toDatum()),
          out: json.out.map(toDatum(-1)),
        }});
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <AllTimeRevenue data={data} />
        <GoalProgress data={data} />
        <Help />
      </div>
    );
  }
}
