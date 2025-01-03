import React from 'react'
import './HomeFeatures.css'
import SectionHeader from '../SectionHeader/SectionHeader'

const header = {
    title: 'Features',
    text: 'Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.'
  }

export default function HomeFeatures() {
  return (
    <section className='main-container'>
      <SectionHeader header={header} />
    </section>
  )
}
