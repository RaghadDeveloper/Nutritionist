import React from 'react';
import './Hero.css';
import img1 from '../../../assets/images/team/heroImg.png'
function Hero({ title, description }) {
  return (
    <div className="NG-hero2">
      <div className="NG-hero-img">
      <img src={img1} alt="" />
        <h2>{title}</h2>
      </div>
      <div className="NG-text">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Hero;
