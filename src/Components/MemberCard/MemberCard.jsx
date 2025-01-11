import React from 'react'
import './MemberCard.css'

export default function MemberCard({title,desc}) {
  return (
    
    <div className='bigcard'>
    <div className='LF-desccard'>

    <h5 >{title}</h5>
    <p >{desc}</p>
     </div>
     </div>
    
  )
}
