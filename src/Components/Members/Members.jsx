import React, { useState } from 'react'
import './Member.css';
import { MemberData } from '../Data/MemberData'
import MemberCard from '../MemberCard/MemberCard';
import InteractiveTabs from '../InteractiveTabs/InteractiveTabs';

export default function Members() {
  const categories = [
    'Management Team',
    'Nutritionists and Dietitians',
    'Customer Support',
    'Marketing and Communications',
    'Technology and Development'
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    console.log(`Selected category: ${category}`);
  };
  return (
    <>
      <section className='main-container pb-150'>
        <InteractiveTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
        <div className='LF-cardMEM '>
          {MemberData.map((e, index) => {
            return (
              < MemberCard key={index} image={e.image} title={e.title} desc={e.desc} />
            )

          })}
        </div>
      </section>
    </>
  )
}
