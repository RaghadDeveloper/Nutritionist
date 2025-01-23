import React from 'react'
import './FAQ.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import { title, text } from "./../Data/faqData.jsx"
import FaqCard from '../FaqCard/FaqCard.jsx'
import FaqQuestion from '../FaqQuestion/FaqQuestion/FaqQuestion.jsx'

export default function FAQ() {
  return (
    <section className='main-container '>
      <SectionHeader title={title} text={text} />
      <div className="NG-faq-container" >
        <div className="NG-faq-questions">
          <FaqQuestion />
        </div>
        <FaqCard />
      </div>
    </section>
  )
}



