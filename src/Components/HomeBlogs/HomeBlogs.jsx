import React, { useEffect, useRef, useState } from 'react';
import './HomeBlogs.css'
import HomeBlogCard from '../HomeBlogCard/HomeBlogCard';
import SectionHeader from '../SectionHeader/SectionHeader'
import {title, text, homeblogData} from './../Data/HomeBlogsData.jsx'
import anime from 'animejs';

export default function HomeBlogs() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          anime({
            targets: '.card-blog',
            translateY: [50, 0],
            opacity: [0, 1], 
            easing: 'easeOutExpo',
            duration: 1000,
            delay: anime.stagger(1000),
          });
          setHasAnimated(true); 
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);
  return (
    <>
      <div className="main-container mb-150"  ref={sectionRef}>
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