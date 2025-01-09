import React, { useState } from 'react'
import './PriceCard.css'

export default function PriceCard({ title1, text1, describtion1, price1, month1, btn1 }) {

  return (
    <div className='PriceCard'>
      <div className='W0-TextContainer'>
        <h3>{title1}</h3>
        <p>{text1}</p>
      </div>
      <p className='WO-describtion'>{describtion1}</p>

      <div className='WO-bottomContainer'>
        <div className='WO-subContainer1'>
          <p>{price1}</p>
          <p>{month1}</p>
        </div>
        <button>{btn1}</button>
      </div>
    </div>
  )
}
