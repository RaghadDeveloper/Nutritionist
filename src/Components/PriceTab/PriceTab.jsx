import React, { useState } from 'react'

export default function PriceTab({ activeButtton, handleClick }) {
  return (

    <div className='Wo-TabContainer'>
      <div className='WO-Tabs'>
        <button className={activeButtton === 'button1' ? 'Wo-Active' : ''} onClick={() => handleClick('button1')}>Monthly</button>
        <button className={activeButtton === 'button2' ? 'Wo-Active' : ''} onClick={() => handleClick('button2')}>Yearly</button>
      </div>
      <p>Save 50% on Yearly</p>
    </div>
  )
}
