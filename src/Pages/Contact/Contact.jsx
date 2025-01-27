import React from 'react'
import './Contact.css'
import Hero from './../../Components/Hero/Hero.jsx'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'
import EndContent from '../../Components/EndContent/EndContent';
import ContactFormMap from '../../Components/ContactFormMap/ContactFormMap';
import {contactEnd} from './../../Components/Data/EndContent'
import { contactHero } from '../../Components/Data/Hero.jsx'

export default function Contact() {
  return (
    <>
      <Hero title={contactHero.title} description={contactHero.description} />
      <div className='Contact'>
        <ContactInfo />
      </div>
      <ContactFormMap />
      <EndContent text={contactEnd.text} description={contactEnd.description} />
      
    </>
  )
}
