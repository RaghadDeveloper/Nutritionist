import React from 'react'
import './About.css'
import AboutHero from '../../Components/AboutHero/AboutHero'
import Story from '../../Components/Story/Story'
import EndContent from '../../Components/EndContent/EndContent'

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <EndContent
        text={"We Are Proud of Our Achievements"}
        desqription={"But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being."}
      />
    </>
    
  
  )
}
