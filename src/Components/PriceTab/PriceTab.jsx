import React, { useState } from 'react'
import './PriceTab.css'

export default function PriceTab({ activeButtton, handleClick }) {
  return (

    <div className='Wo-TabContainer'>
      <div className='WO-Tabs'>
        <button className={`fw-600 fs-18-14 ${activeButtton === 'button1' ? 'Wo-Active' : ''}`} onClick={() => handleClick('button1')}>Monthly</button>
        <button className={`fw-600 fs-18-14 ${activeButtton === 'button2' ? 'Wo-Active' : ''}`} onClick={() => handleClick('button2')}>Yearly</button>
      </div>
      <p className='fw-500 fs-18-16'>Save 50% on Yearly</p>
    </div>
  )
}