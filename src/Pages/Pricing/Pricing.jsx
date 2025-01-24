import React from 'react'
import './Pricing.css'
import Hero from '../../Components/Hero/Hero'
import PricingPlans from '../../Components/PricingPlans/PricingPlans'
import PricingFeatures from '../../Components/PricingFeatures/PricingFeatures'
import FAQ from '../../Components/FAQ/FAQ'
import { pricingHero } from '../../Components/Data/Hero'

export default function Pricing() {
  return (
    <>
      <Hero title={pricingHero.title} description={pricingHero.description}/>
      <PricingPlans />
      {/* <PricingFeatures /> */}
      <FAQ />
    </>
  )
}
