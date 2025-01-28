import React from 'react'
import './MemberCard.css'

export default function MemberCard({ image, title, desc }) {
  return (

    <div className='LF-bigcard'>
      <img className='LF-image' src={image} />
      <div className='LF-desccard'>
        <h5 className='fw-600 fs-24-20 lh-28 m-0'>{title}</h5>
        <p className='fw-500 fs-18-16 lh-24 m-0'>{desc}</p>
      </div>
    </div>

  )
}
