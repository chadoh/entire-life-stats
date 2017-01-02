import React from 'react';
import './Help.css';

export default ({links}) => (
  <section>
    <h3>Help us out:</h3>
    <div className="Help-buttonGroup">
      {links.map((link, index) =>
        <a
          key={index}
          className={`Help-button ${link.className}`}
          href={link.href}
          target="_blank"
        >
          {link.text}
        </a>
      )}
    </div>
  </section>
);
