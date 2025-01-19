import React from 'react'
import './Team.css'
import Hero from '../../Components/Hero/Hero'
import {title, description} from '../../Components/Data/TeamHero'

export default function Team() {
  return (
    <>
      <Hero title={title} description={description} />
    </>
  )
}
