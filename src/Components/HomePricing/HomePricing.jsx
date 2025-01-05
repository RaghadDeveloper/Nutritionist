import React, { useState } from 'react'
import './HomePricing.css'
import PriceCard from '../PriceCard/PriceCard'

export default function HomePricing() {
  const [activeButtton, setActiveButtton] = useState('button1');
  const handleClick = (buttonId) => {

    setActiveButtton(buttonId);

  };
  return (
    <div className='HomePricing container1'>
      <div className='Wo-TabContainer'>
        <div className='WO-Tabs'>
          <button className={activeButtton === 'button1' ? 'Wo-Active' : ''} onClick={() => handleClick('button1')}>Monthly</button>
          <button className={activeButtton === 'button2' ? 'Wo-Active' : ''} onClick={() => handleClick('button2')}>Yearly</button>
        </div>
        <p>Save 50% on Yearly</p>
      </div>
      <div className='W0-pricCards'>
        <PriceCard
          title1={"Basic Plan"}
          text1={"Up to 50% off on Yearly Plan"}
          describtion1={"Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support."}
          price1={"$49"}
          month1={"/month"}
          btn1={"Choose Plan"}
        />
        <PriceCard
          title1={"Premium Plan"}
          text1={"Up to 50% off on Yearly Plan"}
          describtion1={"Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations."}
          price1={"$79"}
          month1={"/month"}
          btn1={"Choose Plan"}
        />
        <PriceCard
          title1={"Ultimate Plan"}
          text1={"Up to 50% off on Yearly Plan"}
          describtion1={"Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops."}
          price1={"$99"}
          month1={"/month"}
          btn1={"Choose Plan"}
        />
      </div>
    </div>
  )
}
