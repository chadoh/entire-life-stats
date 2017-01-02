import React from 'react';

const USERS_API = 'https://entire-life.herokuapp.com/stats/users';

const toDate = str => {
  const [year, month, day] = str.split("T")[0]
    .split("-").slice(0, 3).map(Number);

  return new Date(year, month - 1, day);
};

const toDatum = (multiplier = 1) => datum => ({
  date: toDate(datum.created_at),
  amount: multiplier * datum.amount / 100,
});

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch(USERS_API)
      .then(res => res.json())
      .then(json => {
        this.setState({data: {
          count: json.count,
          users: json.users.map(toDatum()),
        }});
      });
  }

  render() {
    const { data } = this.state;
    if (!data) return null;
    return (
      <div>
        <h3>Here's how we got {data.count} people signed up for Entire.Life:</h3>
      </div>
    );
  }
}
