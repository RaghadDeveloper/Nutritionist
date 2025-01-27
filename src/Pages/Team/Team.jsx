import React from 'react'
import './Team.css'
import Hero from '../../Components/Hero/Hero'
import Members from '../../Components/Members/Members'
import {teamHero} from '../../Components/Data/Hero'
import {teamEnd} from './../../Components/Data/EndContent'
import EndContent from '../../Components/EndContent/EndContent'

export default function Team() {
  return (
    <>
      <Hero title={teamHero.title} description={teamHero.description} />
      <Members/>
      <EndContent text={teamEnd.text} description={teamEnd.description} />
    </>
  )
}

