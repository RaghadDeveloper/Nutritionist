import React from 'react'
import './Blogs.css'
import Hero from '../../Components/Hero/Hero'
import BlogsBlog from '../../Components/BlogsBlog/BlogsBlog'
import { blogsHero } from '../../Components/Data/Hero'

export default function Blogs() {
  return (
    <>
      <Hero title={blogsHero.title} description={blogsHero.description}/>
      <BlogsBlog />
    </>
  )
}
