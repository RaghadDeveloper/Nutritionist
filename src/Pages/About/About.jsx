import React from 'react'
import './About.css'
import AboutHero from '../../Components/AboutHero/AboutHero'
import Story from '../../Components/Story/Story'
import EndContent from '../../Components/EndContent/EndContent'
import {aboutEnd} from './../../Components/Data/EndContent'
import Achievement from '../../Components/Achievement/Achievement'

export default function About() {
  return (
    <>
      <AboutHero />
      <Story />
      <Achievement />
      <EndContent text={aboutEnd.text} description={aboutEnd.description} />
    </>
  )
}
