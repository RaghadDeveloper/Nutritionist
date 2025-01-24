import React from 'react'
import './FooterLink.css'

export default function FooterLink({ id, WOIcon1, WOLink1 }) {
  return (
    <div className='FooterLink' key={id}>
      <img src={WOIcon1} className='WOIcon1' />
      <a href="#">{WOLink1}</a>
    </div>
  )
}
