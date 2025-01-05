import React from 'react'
import './Testimonials.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function Testimonials() {

  const title = 'Testimonials'
  const text = 'Our satisfied clients share their success stories and experiences on their journey to better health and well-being.'

  return (
    <section className='main-container pb-177'>
      <SectionHeader title={title} text={text} />
    </section>
  )
}
