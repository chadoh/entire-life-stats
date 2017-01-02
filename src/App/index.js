import React, { Component } from 'react';
import './App.css';
import Section from '../Section';
import Money from '../Money';
import Users from '../Users';
import Catalog from '../Catalog';

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
          <Section title="The Users" id="users">
            <Users />
          </Section>
          <div id="default">
            <Catalog />
          </div>
          <div id="money">
            <Money />
          </div>
        </main>
      </div>
    );
  }
}
