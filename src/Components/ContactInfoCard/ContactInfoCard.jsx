import React from 'react'
import './ContactInfoCard.css'

export default function ContactInfoCard({ WOIcon, WOLink, linkType }) {
  const getHref = () => {
    if (linkType === 'phone') {
      return ` tel:${WOLink}`;
    } else if (linkType === 'location') {
      return `https://www.google.com/maps?q=${WOLink}`;
    } else if (linkType === 'email') {
      return ` mailto:${WOLink}`;
    } else {
      return WOLink;
    }
  };

  return (
    <div className='ContactInfoCard'>
      <img src={WOIcon} className='WOIcon' alt='icon' />
      <a href={getHref()} className='fw-500 fs-18-16-14'>{WOLink}</a>
    </div>
  )
}
