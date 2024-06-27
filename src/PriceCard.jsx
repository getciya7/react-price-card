import React from 'react';
import './PriceCard.css';

const PriceCard = ({ plan, price, features }) => {
  return (
    <div className="price-card">
      <p className="plan">{plan}</p>
      <p className='price-head'>{price}</p>
      <div className='line'></div>
      <ul>
        {features.map((feature, index) => (
          <li key={index}  className={feature.available ? 'available' : 'unavailable'}>
            {feature.available ? (
              <i className="fas fa-check icon" ></i>
            ) : (
              <i className="fas fa-times icon" ></i>
            )}
            {feature.name}
          </li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
};

export default PriceCard;
