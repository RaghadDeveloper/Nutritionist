import React from 'react'
import './Testimonials.css'
import TestimCard from '../TestimCard/TestimCard'
import { TestimData } from '../Data/TestimData'
import img5 from './../../assets/images/home/Indicators.png'
import img6 from './../../assets/images/home/left arrow.png'
import img7 from './../../assets/images/home/right arrow.png'
export default function Testimonials() {
  return (
    <>
    <div className=' LF-padding d-flex jutify-content-between'>
   {TestimData.map((e,index) => {
    return(
      < TestimCard key={index} title={e.title} img={e.img} desc={e.desc} imge={e.imge}/>
    )

   })}</div>
   <div className='LF-shape '>
   <img src={img6 }/>
   <img src={img5}  />
   <img src={img7}/>
  </div>
  </>

  )
}
