import React from 'react'
import './HomeBlogs.css'
import SectionHeader from '../SectionHeader/SectionHeader'

export default function HomeBlogs() {

  const title = 'Our Blogs'
  const text = "Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog."

  return (
    <section className='main-container pb-150'>
      <SectionHeader title={title} text={text} />
    </section>
  )
}
