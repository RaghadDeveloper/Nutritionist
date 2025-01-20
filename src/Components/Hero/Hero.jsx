import React from 'react';
import './Hero.css';
import img1 from './../../assets/images/team/heroImg.png'
function Hero({ title, description }) {
  return (
    <div className='main-container'>
      <div className="NG-hero2">
        <div className="NG-hero-img">
          <img src={img1} alt="" />
        </div>
        <div className="NG-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
