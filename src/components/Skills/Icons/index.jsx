import React from 'react';
import './icons.css';

function Icon(props) {
  return (
    <div className="card" id="cardHover">
      <div className="cardIcon shadow text-center pt-4">
        <span>{props.icon}</span>
        <div className="card-body">
          <h4 className="card-title text-center">{props.lang}</h4>
        </div>
      </div>
    </div>
  );
}

export default Icon;
