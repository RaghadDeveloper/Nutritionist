import React from 'react'
import './Home.css'
import HomeHero from '../../Components/HomeHero/HomeHero'
import HomeFeatures from '../../Components/HomeFeatures/HomeFeatures'
import HomeBlogs from '../../Components/HomeBlogs/HomeBlogs'
import Testimonials from '../../Components/Testimonials/Testimonials'
import HomePricing from '../../Components/HomePricing/HomePricing'

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeFeatures />
      <HomeBlogs />
      <Testimonials />
      <HomePricing />
    </>
  )
}
