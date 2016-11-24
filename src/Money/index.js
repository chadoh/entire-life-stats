import React from 'react';
import Grid from '../Grid';
import AllTimeRevenue from './AllTimeRevenue';

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

const total = data => {
  return data.in.map(toDatum()).concat(
    data.out.map(toDatum(-1))
  ).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  ).reduce((acc, datum, idx) => {
    acc.push({
      x: datum.date,
      y: datum.amount + (acc[idx - 1] ? acc[idx - 1].y : 0),
    });
    return acc;
  }, []);
}

export default class Money extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch(MONEY_API)
      .then(res => {
        return res.json();
      }).then(json => {
        this.setState({data: total(json)});
      });
  }

  render() {
    return (
      <Grid>
        <div>
          <h2>the money</h2>
          <AllTimeRevenue data={this.state.data} />
        </div>
      </Grid>
    );
  }
}
