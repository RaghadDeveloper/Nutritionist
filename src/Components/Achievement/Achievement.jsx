import React from 'react'
import './Achievement.css'
import CardWithIcon from "../CardWithIcon/CardWithIcon";
import SectionHeader from '../SectionHeader/SectionHeader'
import { title, text, achievementData } from '../Data/AchievementData'

export default function Achievement() {
  return (
    <section className='main-container pb-150'>
      <SectionHeader title={title} text={text} />
      <div className="cards-container">
        {achievementData.map((card, index) => (
          <CardWithIcon
            key={index}
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  )
}
