import React from 'react';
import './Meter.css';

export default ({low, max, optimum, text, title, value}) => (
  <meter
    className="Meter"
    low={low}
    max={max}
    optimum={optimum}
    title={title}
    value={value}
  >
    <div className="Meter-gauge">
      <span className="Meter-bar" style={{width: `${100 * value / max}%`}}/>
      <span className="Meter-text">{text}</span>
    </div>
  </meter>
)
