import React, { useState } from 'react'
import './PricingPlans.css'
import PriceCard from '../PriceCard/PriceCard'
import { DataCard } from '../Data/PricingPlans'


export default function PricingPlans() {
  const [activeButtton, setActiveButtton] = useState('button1');
  const handleClick = (buttonId) => {
    setActiveButtton(buttonId);
  };

  return (
    <div className='PricingPlans main-container pb-150'>
      <div className='Wo-TabContainer'>
        <div className='WO-Tabs'>
          <button className={activeButtton === 'button1' ? 'Wo-Active' : ''} onClick={() => handleClick('button1')}>Monthly</button>
          <button className={activeButtton === 'button2' ? 'Wo-Active' : ''} onClick={() => handleClick('button2')}>Yearly</button>
        </div>
        <p>Save 50% on Yearly</p>
      </div>
        {
          activeButtton === 'button1' &&
          <div className='WO-PriceCardsPlans'>
          {DataCard.map((data) => (
            <PriceCard
              key={data.id}
              isHomePricing={data.isHomePricing}
              addP={data.addP}
              Note={data.Note}
              title1={data.title1}
              text1={data.text1}
              row1={data.row1}
              row2={data.row2}
              row3={data.row3}
              row4={data.row4}
              row5={data.row5}
              price1={data.price1}
              month1={data.month1}
              btn1={data.btn1}
              CardNote={data.CardNote}
            />

          ))
        }
      </div>
}
    </div>
  )
}
