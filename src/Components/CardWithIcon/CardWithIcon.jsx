import React from 'react';
import './CardWithIcon.css';


export default function CardWithIcon ({image, title, text, showNumber, numberImage }) {
  return (
    <div className={`card ${showNumber ? 'card-with-number' : ''}`}>
      {showNumber && numberImage && (
        <div className="number-background">
          <img src={numberImage} alt="Number background" />
        </div>
      )}
      <div className="image-container">

        <img src={image}   />
        <h3 className='mb-0'>{title}</h3>
      </div>
      <p className="card-content mb-0">{text}</p>
    </div>
  );
};


