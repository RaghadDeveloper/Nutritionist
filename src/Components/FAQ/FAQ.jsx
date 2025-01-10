import React from 'react'
import './FAQ.css'
import img from './../../assets/images/pricing/Logo.png'
export default function FAQ() {
  return (
    <div className='NG-FAQ'>
      <div className='NG-first'>
        <h3>FAQ</h3>
        <p>We address commonly asked questions and provide comprehensive answers to help you navigate your way through your nutrition and wellness journey.</p>
      </div>
      <div className='NG-first1'>
        <div className='NG-left1'>
         
        </div>
        <div className='NG-right1'>
          <img src={img} alt="logo" />
          <div className='NG-text'>
            <h5>Ask your question</h5>
            <p>Feel Free to Ask questions on anytime</p>
          </div>
          <div className='NG-BTN'>
            <button>Ask A Question</button>
          </div>
        </div>
      </div>
    </div>
  )
}
