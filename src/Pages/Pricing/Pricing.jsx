import React from 'react'
import './Pricing.css'
import Hero from '../../Components/Hero/Hero'
import PricingPlans from '../../Components/PricingPlans/PricingPlans'
import PricingFeatures from '../../Components/PricingFeatures/PricingFeatures'
import FAQ from '../../Components/FAQ/FAQ'

export default function Pricing() {
  return (
    <>
      <Hero title={"Our Pricing"} description={"At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle"}/>
      <PricingPlans />
      <PricingFeatures />
      <FAQ />
    </>
  )
}
