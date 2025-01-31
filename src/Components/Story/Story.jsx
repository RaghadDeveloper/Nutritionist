import React from 'react'
import './Story.css'
import StoryCard from '../StoryCard/StoryCard'
import SectionHeader from '../SectionHeader/SectionHeader';
import { text, title, storyData } from '../Data/StoryData';



export default function Story() {

  return (
    <section className="main-container mb-150">
      <SectionHeader title={title} text={text} />
      <div className='SM-story'>
        {storyData.map((story, index) => (
          <div
            key={index}
            className={`row ${index % 2 !== 0 ? 'rtl' : ''} ${index >= 4 ? 'd-none d-lg-flex' : ''}`}>
            <StoryCard
              imageSrc={story.imageSrc}
              title={story.title}
              description={story.description}
              date={story.date}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
