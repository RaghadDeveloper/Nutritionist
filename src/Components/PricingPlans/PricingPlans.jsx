import React from 'react'
import './PricingPlans.css'
import PriceCard from '../PriceCard/PriceCard'
import { DataCard } from '../Data/PricingPlans'


export default function PricingPlans() {

  return (
    <div className='PricingPlans main-container'>
      <div className='WO-PriceCardsPlans'>
        {
          DataCard.map((data) => (
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
    </div>
  )
}
