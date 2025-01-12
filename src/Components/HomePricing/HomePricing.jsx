import React, { useState } from 'react'
import './HomePricing.css'
import PriceCard from '../PriceCard/PriceCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import { title, text, pricingData1, pricingData2 } from '../Data/HomePricingData.jsx'

export default function HomePricing() {

  const [activeButtton, setActiveButtton] = useState('button1');
  const handleClick = (buttonId) => {
    setActiveButtton(buttonId);
  };

  return (
    <section className='main-container HomePricing pb-150'>
      <SectionHeader title={title} text={text} />
      <div className='Wo-TabContainer'>
        <div className='WO-Tabs'>
          <button className={activeButtton === 'button1' ? 'Wo-Active' : ''} onClick={() => handleClick('button1')}>Monthly</button>
          <button className={activeButtton === 'button2' ? 'Wo-Active' : ''} onClick={() => handleClick('button2')}>Yearly</button>
        </div>
        <p>Save 50% on Yearly</p>
      </div>
      {
        activeButtton === 'button1' &&
        <div className='W0-pricCards '>
          {pricingData1.map((data) => (
            <PriceCard
              key={data.id}
              isHomePricing={data.isHomePricing}
              title1={data.title1}
              text1={data.text1}
              describtion1={data.describtion1}
              price1={data.price1}
              month1={data.month1}
              btn1={data.btn1}
            />

          ))}
        </div>
      }
      {
        activeButtton === 'button2' &&
        <div className='W0-pricCards'>
          {pricingData2.map((data) => (
            <PriceCard
              key={data.id}
              isHomePricing={data.isHomePricing}
              title1={data.title1}
              text1={data.text1}
              describtion1={data.describtion1}
              price1={data.price1}
              month1={data.month1}
              btn1={data.btn1}
            />

          ))}
        </div>
      }
    </section>

  )
}
