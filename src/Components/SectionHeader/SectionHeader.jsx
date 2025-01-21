import React from 'react'
import './SectionHeader.css'
import anime from 'animejs';
import { useEffect, useRef } from 'react';

export default function SectionHeader({ title, text }) {
  const sectionRef = useRef(null);   //Create a reference that we use to access and move the element we want to monitor

  useEffect(() => {
    const observer = new IntersectionObserver(  //IntersectionObserver:It is an API for monitoring when an item is visible in a viewport.
      ([entry]) => {
        if (entry.isIntersecting) { //A condition that checks if the item is visible in the display window
          anime({
            targets: entry.target.querySelector('.RM-title'), //Specifies the element to which the effect will be applied
            opacity: [0, 1],
            scale: [0.8, 1],
            duration: 1000,
            easing: 'easeOutQuad'
          });
          observer.unobserve(entry.target); // Monitoring stops after the first activation of the animaton
        }
      },
      { threshold: 0.5 } // 50% of the section must be visible for the animation to activate
    );

    if (sectionRef.current) {               //if the reference 'sectionRef' points to an existing object ,we start observing it using 'observer.observe'
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {                  //Executed when unmouting the elemnt
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className='section-header d-flex flex-column' ref={sectionRef}>
      <h2 className='RM-title text-center m-0'>{title}</h2>
      <p className='RM-text text-center m-0'>{text}</p>
    </section>
  )
}
