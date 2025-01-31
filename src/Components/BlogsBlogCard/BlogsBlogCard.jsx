import React from 'react'
import './BlogsBlogCard.css'


export default function BlogsBlogCard({ blog_title, blog_subTitle, blog_description, imageUrl }) {
  return (
    <div className="SM-blogCard h-100">
      <div className="SM-blogCard-Header">
        <h3 className="SM-blogCard-category fw-600 fs-24-22-20 m-0">{blog_title}</h3>
        <div className="SM-blogCard-Image-container">
          <img src={imageUrl} className="SM-blogCard-Image" />

        </div>
      </div>
      <div className="SM-blogCard-Content">
        <div className="SM-blogCard-Details">
          <h4 className="SM-blogCard-subtitle fw-600 fs-24-20-18">{blog_subTitle}</h4>
          <p className="SM-blogCard-description fw-500 fs-18-16 m-0">{blog_description}</p>
        </div>
        <div className="SM-blogCard-button-container">
          <button className='SM-blogCard-button fw-600 fs-18-14'>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}
