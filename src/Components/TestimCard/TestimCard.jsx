import React from 'react'
import './TestimCard.css'

export default function TestimCard({img,title,desc,imge}) {
  return (
    <div className='LF-card'>
      <div className='sec1'>
        <img src={imge} />
        <p className='mb-0'>{desc}</p>
      </div>
      <div className='sec2 d-flex align-items-center'>
        <img src={img}/>
        <h5 className='name mb-0'>{title}</h5>
      </div>
    </div> 
  )
}