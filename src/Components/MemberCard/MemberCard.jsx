import React from 'react'
import './MemberCard.css'

export default function MemberCard({ image, title, desc }) {
  return (

    <div className='LF-bigcard'>
      <img className='LF-image' src={image} />
      <div className='LF-desccard'>
        <h5 className='m-0'>{title}</h5>
        <p className='m-0'>{desc}</p>
      </div>
    </div>

  )
}
