import React from 'react';
import './Box.css';

export default ({title, children}) => (
  <div className="Box">
    <header className="Box-title">
      <h2>{title}</h2>
    </header>
    {children}
  </div>
);
