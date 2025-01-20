import React from 'react';
import './Hero.css';
import img1 from './../../assets/images/team/heroImg.png'
function Hero({ title, description }) {
  return (
    <div className="NG-hero2" data-aos="fade-down">
      <div className="NG-hero-img" data-aos="flip-left">
        <img src={img1} alt="" />
        <h2>{title}</h2>
      </div>
      <div className="NG-text" data-aos="slide-right">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Hero;
