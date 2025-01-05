import React from 'react'
import './HomePricing.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function HomePricing() {
  
  const title = 'Our Pricing'
  const text = 'We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources'

  return (
    <section className='main-container pb-150'>
      <SectionHeader title={title} text={text} />
    </section>
  )
}
