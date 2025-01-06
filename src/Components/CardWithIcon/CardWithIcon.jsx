import React from 'react'
import './CardWithIcon.css'


const CardWithIcon = ({ image, title, text }) => {
  return (
    <div className="card">
      <div className="image-container">
      <img src={image}  />
       <div className="cont">
       
       <h3>{title}</h3>
       </div>
      </div>
      <div className="card-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CardWithIcon;

