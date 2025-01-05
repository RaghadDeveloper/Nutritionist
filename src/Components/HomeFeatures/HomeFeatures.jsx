import React from 'react'
import './HomeFeatures.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function HomeFeatures() {

  const title = 'Features'
  const text = 'Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness.'

  return (
    <section className='main-container pb-177'>
      <SectionHeader title={title} text={text} />
    </section>
  )
}
