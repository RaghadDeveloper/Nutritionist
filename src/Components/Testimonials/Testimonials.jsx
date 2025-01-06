import React from 'react'
import './Testimonials.css'
import TestimCard from '../TestimCard/TestimCard'
import { TestimData } from '../Data/TestimData'
import Slider from 'react-slick'
import img5 from './../../assets/images/home/right arrow.png'
import img6 from './../../assets/images/home/left/arrow.png'


export default function Testimonials() {
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1

          }
        }
      ]
    };
    return (
      <>
      <div className='main-container'>
      <div className="slider-container">
        <Slider {...settings}>
   {TestimData.map((e,index) => {
    return(
      < TestimCard key={index} title={e.title} img={e.img} desc={e.desc} imge={e.imge}/>
    )

   })}
          
        </Slider>
      </div>
      </div>
      
     </>
    )
}
