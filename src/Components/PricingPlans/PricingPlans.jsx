import React, { useState } from 'react'
import './PricingPlans.css'
import PriceCard from '../PriceCard/PriceCard'
import { DataCard1, DataCard2 } from '../Data/PricingPlans'
import PriceTab from '../PriceTab/PriceTab';


export default function PricingPlans() {
  const [activeButtton, setActiveButtton] = useState('button1');
  const handleClick = (buttonId) => {
    setActiveButtton(buttonId);
  };

  const dataToRender = activeButtton === 'button1' ? DataCard1 : DataCard2;

  return (
    <div className='PricingPlans main-container pb-150'>
      <PriceTab activeButtton={activeButtton} handleClick={handleClick} />
      {
        <div className='WO-PriceCardsPlans'>
          {dataToRender.map((data) => (
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
