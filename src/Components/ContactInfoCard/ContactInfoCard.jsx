import React from 'react'
import './ContactInfoCard.css'

export default function ContactInfoCard({ WOIcon, WOLink }) {
  return (
    <div className='ContactInfoCard'>
      <img src={WOIcon} className='WOIcon' />
      <a href="#">{WOLink}</a>

    </div>
  )
}
