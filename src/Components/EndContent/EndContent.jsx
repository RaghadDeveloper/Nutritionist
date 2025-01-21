import React, { useEffect } from 'react';
import './EndContent.css'
import AbstractDesign from "./../../assets/images/footer/Abstract Design 2.png"
import AbstractDesign2 from "./../../assets/images/footer/Abstract Design 3.png"
import AbstractDesign3 from "./../../assets/images/footer/Abstract Design 4.png"
import AbstractDesign4 from "./../../assets/images/footer/Abstract Design 5.png"


export default function EndContent({ text, desqription }) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.fade-slide-up').forEach(element => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className=' main-container pb-150'>

      <div className='EndContent fade-slide-up'>
        <img src={AbstractDesign} className='WO-AbstractDesign1' />

        <img src={AbstractDesign2} className='WO-AbstractDesign2' />
        <img src={AbstractDesign3} className='WO-AbstractDesign3' />
        <img src={AbstractDesign4} className='WO-AbstractDesign4' />
        <div className='WO-EndContainer'>
          <div className='WO-TextContainer1'>
            <h2>{text}</h2>
            <p>{desqription}</p>
          </div>
          <button>Book a Demo</button>
        </div>
      </div>
    </div>
  )
} 
