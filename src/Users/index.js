import React from 'react';
import SignUps from './SignUps';
import Help from './Help';
import toDate from '../helpers/toDate';

const USERS_API = 'https://entire-life.herokuapp.com/stats/users';

const toDatum = datum => ({
  created_at: toDate(datum.created_at),
});

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch(USERS_API)
      .then(res => res.json())
      .then(json => {
        this.setState({data: {
          count: json.count,
          users: json.users.map(toDatum),
        }});
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <SignUps data={data} />
        <Help />
      </div>
    );
  }
}
