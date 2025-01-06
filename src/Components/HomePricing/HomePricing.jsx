import React, { useState } from 'react'
import './HomePricing.css'
import PriceCard from '../PriceCard/PriceCard'

import SectionHeader from '../SectionHeader/SectionHeader'

export default function HomePricing() {
  
  const title = 'Our Pricing'
  const text = 'We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources'
  const pricingData1 = [
    {
      title1: "Basic Plan",
      text1: "Up to 50% off on Yearly Plan",
      describtion1: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
      price1: "$49",
      month1: "/month",
      btn1: "Choose Plan"
    },
    {
      title1: "Premium Plan",
      text1: "Up to 50% off on Yearly Plan",
      describtion1: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      price1: "$79",
      month1: "/month",
      btn1: "Choose Plan"
    },
    {
      title1: "Elite Plan",
      text1: "Up to 50% off on Yearly Plan",      
      describtion1: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
      price1: "$99",
      month1: "/month",
      btn1: "Choose Plan"
    }
  ]
  const pricingData2 = [
    {
      title1: "Basic Plan",
      text1: "Up to 50% off on Yearly Plan",
      describtion1: "Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.",
      price1: "$580",
      month1: "/year",
      btn1: "Choose Plan"
    },
    {
      title1: "Premium Plan",
      text1: "Up to 50% off on Yearly Plan",
      describtion1: "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      price1: "$930",
      month1: "/year",
      btn1: "Choose Plan"
    },
    {
      title1: "Elite Plan",
      text1: "Up to 50% off on Yearly Plan",      
      describtion1: "Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.",
      price1: "$1150",
      month1: "/year",
      btn1: "Choose Plan"
    }
  ]
  const [activeButtton, setActiveButtton] = useState('button1');
  const handleClick = (buttonId) => {
    setActiveButtton(buttonId);
  };

  return (
    <section className='main-container HomePricing pb-150'>
      <SectionHeader title={title} text={text} />
      <div className='Wo-TabContainer'>
        <div className='WO-Tabs'>
          <button className={activeButtton === 'button1' ? 'Wo-Active' : ''} onClick={() => handleClick('button1')}>Monthly</button>
          <button className={activeButtton === 'button2' ? 'Wo-Active' : ''} onClick={() => handleClick('button2')}>Yearly</button>
        </div>
        <p>Save 50% on Yearly</p>
      </div>
      {
        activeButtton==='button1' &&
        <div className='W0-pricCards'>
        {pricingData1.map((item, index) => (
            <PriceCard
              key={index}
              title1={item.title1}
              text1={item.text1}
              describtion1={item.describtion1}
              price1={item.price1}
              month1={item.month1}
              btn1={item.btn1}
            />
          ))}
        </div>
      }
      {
        activeButtton==='button2' &&
        <div className='W0-pricCards'>
        {pricingData2.map((item, index) => (
            <PriceCard
              key={index}
              title1={item.title1}
              text1={item.text1}
              describtion1={item.describtion1}
              price1={item.price1}
              month1={item.month1}
              btn1={item.btn1}
            />
          ))}
        </div>
      }
    </section>

  )
}
