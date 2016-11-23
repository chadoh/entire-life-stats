import React, { Component } from 'react';
import './App.css';
import Money from '../Money';
import Logo from '../Logo';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <h1><Logo /><small>stats</small></h1>
        </div>
        <Money />
      </div>
    );
  }
}
