import React from 'react'
import './SectionHeader.css'
import anime from 'animejs';
import { useEffect, useRef } from 'react';

export default function SectionHeader({ title, text }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelector('h2'),
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 1000,
            easing: 'easeOutQuad'
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className='section-header d-flex flex-column' ref={sectionRef}>
      <h2 className='fs-48-38-28 fw-700 text-center m-0'>{title}</h2>
      <p className='fw-500 fs-18-16-14 medium-gray text-center'>{text}</p>
    </section>
  )
}
