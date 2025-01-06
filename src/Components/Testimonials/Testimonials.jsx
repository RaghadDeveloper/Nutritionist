import React from 'react'
import './Testimonials.css'
import TestimCard from '../TestimCard/TestimCard'
import { TestimData } from '../Data/TestimData'
import Slider from 'react-slick'

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
          breakpoint: 1660,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            //initialSlide: 3,
           
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
      
      <div className="slider-container main-container   ">
      
        <Slider {...settings}>
    
   {TestimData.map((e,index) => {
    return(
      < TestimCard key={index} title={e.title} img={e.img} desc={e.desc} imge={e.imge}/>
    )

   })}
          
        </Slider>
        </div>
     
     
     </>
    )
}
