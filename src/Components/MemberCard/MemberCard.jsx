import React from 'react'
import './MemberCard.css'

export default function MemberCard({ image,title,desc}) {
  return (
    
    <div className='LF-bigcard'>
      <img className='LF-image' src={image}/>
    <div className='LF-desccard'>

    <h5 >{title}</h5>
    <p >{desc}</p>
     </div>
     </div>
    
  )
}
