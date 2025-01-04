import React from 'react'
import './SectionHeader.css'

export default function SectionHeader({title, text}) {
  return (
    <section className='section-header d-flex flex-column'>
        <h2 className='RM-title text-center m-0'>{title}</h2>
        <p className='RM-text text-center m-0'>{text}</p>
    </section>
  )
}
