import React from 'react'
import './HomeBlogs.css'
import HomeBlogCard from '../HomeBlogCard/HomeBlogCard';
import SectionHeader from '../SectionHeader/SectionHeader'
import {title, text, homeblogData} from './../Data/HomeBlogsData.jsx'

export default function HomeBlogs() {
  
  return (
    <>
      <div className="main-container pb-150">
        <SectionHeader title={title} text={text} />
        <div className="row justify-content-center">
          {homeblogData.map((blog, index) => (
            <div key={index} className={`col-lg-6 col-md-12 col-sm-12 pb-4 order-sm-${index === 0 ? 1 : index === 1 ? 3 : index === 2 ? 2 : 4} order-lg-${index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 3 : 4}`} >
              <HomeBlogCard
                image={blog.image}
                title={blog.title}
                subTitle={blog.subTitle}
                description={blog.description}
                authorImage={blog.authorImage}
                authorName={blog.authorName}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
