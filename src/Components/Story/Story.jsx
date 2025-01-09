import React from 'react'
import './Story.css'
import StoryCard from '../StoryCard/StoryCard'
import story1 from './../../assets/images/about/Image 1.webp';
import story2 from './../../assets/images/about/Image 2.webp';
import story3 from './../../assets/images/about/Image 3.webp';
import story4 from './../../assets/images/about/Image 4.webp';
import story5 from './../../assets/images/about/Image 5.webp';
import story6 from './../../assets/images/about/Image 6.webp';
import story7 from './../../assets/images/about/Image 7.webp';
import story8 from './../../assets/images/about/Image 8.webp';
import story9 from './../../assets/images/about/Image 9.webp';
import story10 from './../../assets/images/about/Image 10.webp';

export default function Story() {
  const storyData = [
    {
      imageSrc: story1,
      title: 'Inspiring Transformations Story',
      description: `Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.`,
      date: 'July 1, 2025'
    },
    {
      imageSrc: story2,
      title: 'Recognition and Accolades Story',
      description: `Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.`,
      date: 'March 10, 2023'
    },
    {
      imageSrc: story3,
      title: 'Continued Growth Story',
      description: `Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.`,
      date: 'November 2, 2021'
    },
    {
      imageSrc: story4,
      title: 'Collaborating for Success Story',
      description: `Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.`,
      date: 'July 15, 2019'
    },
    {
      imageSrc: story5,
      title: 'Enhanced Support Story',
      description: `In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.`,
      date: 'April 1, 2018'
    },
    {
      imageSrc: story6,
      title: 'Innovating for Clients Story',
      description: `Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.`,
      date: 'January 20, 2017'
    },
    {
      imageSrc: story7,
      title: 'Celebrating Success Stories',
      description: `Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.`,
      date: 'September 5, 2015'
    },
    {
      imageSrc: story8,
      title: 'Expanding Reach Story',
      description: `Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.`,
      date: 'June 10, 2014'
    },
    {
      imageSrc: story9,
      title: 'Research and Expertise Story',
      description: `After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.`,
      date: 'January 1, 2010'
    },
    {
      imageSrc: story10,
      title: 'The Inception Story',
      description: `On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.`,
      date: 'January 1, 2010'
    }
  ];
  return (
    <>
      <div className="container SM-story">
        {
          storyData.map((story, index) => (
            <div
              key={index}
              className={`row ${index % 2 !== 0 ? 'rtl' : ''} ${index >= 4 ? 'd-none d-md-flex' : ''}`}>
              <StoryCard
                imageSrc={story.imageSrc}
                title={story.title}
                description={story.description}
                date={story.date}
              />
            </div>
          ))
        }
      </div>
    </>
  )
}
