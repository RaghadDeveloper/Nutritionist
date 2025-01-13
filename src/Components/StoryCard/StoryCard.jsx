import React from 'react'
import './StoryCard.css'


export default function StoryCard({ imageSrc, title, description, date }) {
  return (
    <>
      <div className="col-lg-6 col-md-12 col-sm-12 p-0 ">
        <img className='w-100 h-100 SM-image-section' src={imageSrc} />
      </div>
      <div className="col-lg-6 col-md-12 col-sm-12 SM-text-section">
        <h2 className='SM-story-title'>{title}</h2>
        <div className='SM-story-description'>{description}</div>
        <div className="SM-story-date">{date}</div>
      </div>
    </>
  )
}
