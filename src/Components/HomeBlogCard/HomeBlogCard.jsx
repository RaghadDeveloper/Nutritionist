import React from 'react'
import './HomeBlogCard.css'
import icon1 from './../../assets/images/home/heart.png';
import icon2 from './../../assets/images/home/save.png';

export default function HomeBlogCard({ image, title, subTitle, description, authorImage, authorName }) {
  return (
    <>
      <div className="card-blog h-100 w-100">
        <div className="photo-blog">
          <img src={image} alt="photo" />
        </div>
        <div className="card-details">
          <div className="headingsection">
            <h6 className='font-500 medium-gray'>{title}</h6>
            <h3 className='font-600 fs-4 dark-gray'>{subTitle}</h3>
          </div>
          <div className="description font-500 dark-gray-text">
            {description}
          </div>
          <div className="row info-interactions-row ">
            <div className="col-lg-10 col-md-6 col-sm-6 p-0">
              <div className="authorInfo">
                <img src={authorImage} alt="" />
                <div className="authorName">
                  <div className='font-600 dark-green'>{authorName}</div>
                  <div className='font-500 gray date'>23 May 2023 - 5 min read</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 p-0 ">
              <div className="d-flex flex-row justify-content-end g-8">
                <button className='love btn-blog'>
                  <img src={icon1} alt="" />
                </button>
                <button className='save btn-blog'>
                  <img src={icon2} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
