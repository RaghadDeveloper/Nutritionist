import React from 'react'
import './BlogsBlogCard.css'


export default function BlogsBlogCard({ blog_title, blog_subTitle, blog_description, imageUrl }) {
  return (
    <>
      <div className="SM-blogCard h-100">
        <div className="SM-blogCard-Header">
          <h3 className="SM-blogCard-category">{blog_title}</h3>
          <div className="SM-blogCard-Image-container">
            <img src={imageUrl} className="SM-blogCard-Image" />

          </div>
        </div>
        <div className="SM-blogCard-Content">
          <div className="SM-blogCard-Details">
            <h4 className="SM-blogCard-subtitle">{blog_subTitle}</h4>
            <p className="SM-blogCard-description">{blog_description}</p>
          </div>
          <div className="SM-blogCard-button-container">
            <button className='SM-blogCard-button'>
              Read More
            </button>
          </div>
        </div>
      </div>

    </>
  )
}
