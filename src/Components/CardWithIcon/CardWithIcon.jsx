import React from 'react'
import './CardWithIcon.css'

export default function CardWithIcon ({image, title, text }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image}   />
        <h3 className='mb-0'>{title}</h3>
      </div>
      <p className="card-content mb-0">{text}</p>
    </div>
  );
};


