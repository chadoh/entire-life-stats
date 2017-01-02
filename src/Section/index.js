import React from 'react';
import './Section.css';

export default ({id, title, children}) => (
  <div id={id}>
    {title &&
      <header className="Section-header">
        <h2>{title}</h2>
        <a href="#" title="home">&times;</a>
      </header>
    }
    {children}
  </div>
);
