import React from 'react'
import './TestimCard.css'

export default function TestimCard({img,title,desc,imge}) {
  return (
     <>
    <div className='LF-card'>
    <img src={imge} />
    <p className='LF-desc'>{desc}</p>
    <div className='LF-line d-flex justify-content pt-5 m-8 mt-5'>
    <img src={img}/>
    <h5 className='LF-title m-3'>{title}</h5></div>
    </div> 
    
  </>
  )
}
