import React from 'react'
import './Process.css'
import Hero from '../../Components/Hero/Hero'
import Works from "../../Components/Works/Works";
import EndContent from '../../Components/EndContent/EndContent';
import {processEnd} from './../../Components/Data/EndContent'
import { processHero } from '../../Components/Data/Hero.jsx';

export default function Process() {
  return (
    <>
      <Hero title={processHero.title} description={processHero.description}/>
      <Works />
      <EndContent text={processEnd.text} description={processEnd.description} />
    </>
  )
}