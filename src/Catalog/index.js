import React from 'react';
import money from './money.png';
import './Catalog.css';

export default () => (
  <div className="Catalog">
    <h2>What would you like to learn about?</h2>
    <div className="Catalog-grid">
      <a href="#money">
        <span className="Catalog-gridItemHead">The Money</span>
        <img src={money} alt="" />
      </a>
      <a href="#users">
        <span className="Catalog-gridItemHead">The Users</span>
        <img src={money} alt="" />
      </a>
    </div>
  </div>
);
