import React, { useRef } from 'react'
import './Testimonials.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import TestimCard from '../TestimCard/TestimCard'
import Slider from 'react-slick'
import leftArrow from '../../assets/images/home/left arrow.png'
import rightArrow from '../../assets/images/home/right arrow.png'
import {title, text, TestimData } from '../Data/TestimData.jsx'

export default function Testimonials() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='main-container pb-177'>
      <SectionHeader title={title} text={text} />
      <div className="slider-container">

        <Slider ref={slider => {sliderRef = slider;}} {...settings}>
          {TestimData.map((e, index) => {
            return (
              < TestimCard key={index} title={e.title} img={e.img} desc={e.desc} imge={e.imge} />
            )
          })}
        </Slider>
        <div className='slider-buttons w-100 d-flex justify-content-center'>
          <button className="prev-button" onClick={previous}>
            <img src={leftArrow} alt="" />
          </button>
          <button className="next-button" onClick={next}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}
