import React from 'react'
import './EndContent.css'
import AbstractDesign2 from "./../../assets/images/footer/Abstract Design 1.png"
import AbstractDesign from "./../../assets/images/footer/Abstract Design 2.png"

export default function EndContent({ text, desqription }) {
  return (
    <div className='EndContent container1'>

      <img src={AbstractDesign} className='WO-AbstractDesign1' />

      <img src={AbstractDesign2} className='WO-AbstractDesign2' />
      <div className='WO-EndContainer'>
        <div className='WO-TextContainer1'>
          <h2>{text}</h2>
          <p>{desqription}</p>
        </div>
        <button>Book a Demo</button>
      </div>
    </div>
  )
}
