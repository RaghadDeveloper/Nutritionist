import React from 'react'
import './FooterLink.css'

export default function FooterLink({ id, WOIcon1, WOLink1, linkType1 }) {
  const getHref = () => {
    if (linkType1 === 'phone') {
      return ` tel:${WOLink1}`;
    } else if (linkType1 === 'location') {
      return `https://www.google.com/maps?q=${WOLink1}`;
    } else if (linkType1 === 'email') {
      return ` mailto:${WOLink1}`;
    } else {
      return WOLink1;
    }
  };
  return (
    <div className='FooterLink' key={id}>
      <img src={WOIcon1} className='WOIcon1' />
      <a href={getHref()} className='fw-500 fs-18-16'>{WOLink1}</a>
    </div>
  )
}
