import React from 'react'
import './SectionHeader.css'

export default function SectionHeader({header}) {
  return (
    <section className='section-header'>
        <h2 className='RM-title text-center'>{header.title}</h2>
        <p className='RM-text text-center'>{header.text}</p>
    </section>
  )
}
