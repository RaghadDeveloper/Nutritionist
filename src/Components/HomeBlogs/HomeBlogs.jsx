import React, { useEffect, useRef, useState } from 'react';
import './HomeBlogs.css'
import HomeBlogCard from '../HomeBlogCard/HomeBlogCard';
import SectionHeader from '../SectionHeader/SectionHeader'
import { title, text, homeblogData } from './../Data/HomeBlogsData.jsx'
import anime from 'animejs';

export default function HomeBlogs() {
  return (
    <section className="main-container mb-150">
      <SectionHeader title={title} text={text} />
      <div className="home-blogs row justify-content-center">
        {homeblogData.map((blog, index) => (
          <div key={index} className={`col-lg-6 col-md-12 col-sm-12 order-sm-${index === 0 ? 1 : index === 1 ? 3 : index === 2 ? 2 : 4} order-lg-${index === 0 ? 1 : index === 1 ? 2 : index === 2 ? 3 : 4}`} >
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
    </section>
  )
}