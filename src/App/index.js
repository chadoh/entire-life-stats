import React, { Component } from 'react';
import './App.css';
import Money from '../Money';
import Users from '../Users';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="App-title">stats.entire.life</h1>
        <p className="App-lead">
          stats.entire.life is charting the nitty-gritty business details of
          running <a href="https://entire.life">Entire.Life</a>
        </p>
        <main className="App-main" role="main">
          <div id="users">
            <Users />
          </div>
          <div id="default">
            <a href="#money">The Money</a>
            <a href="#users">The Users</a>
          </div>
          <div id="money">
            <Money />
          </div>
        </main>
      </div>
    );
  }
}
