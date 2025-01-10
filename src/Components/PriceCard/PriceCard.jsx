import React, { useState } from 'react'
import './PriceCard.css'

export default function PriceCard({ title1, text1, describtion1, price1, month1, btn1 }) {

  return (
    <div className='PriceCard'>
      <div className='W0-TextContainer'>
        <h3 className='mb-0'>{title1}</h3>
        <p className='mb-0'>{text1}</p>
      </div>
      
      <p className='WO-describtion mb-0'>{describtion1}</p>

      <div className='WO-bottomContainer'>
        <div className='WO-subContainer1'>
          <p className='mb-0'>{price1}</p>
          <p className='mb-0'>{month1}</p>
        </div>
        <button>{btn1}</button>
      </div>
    </div>
  )
}
