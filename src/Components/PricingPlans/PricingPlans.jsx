import React from 'react'
import './PricingPlans.css'
import PriceCard from '../PriceCard/PriceCard'


export default function PricingPlans() {
  const DataCard = [
    {
      id: 1,
      isHomePricing: false,
      title1: "Basic Plan",
      text1: "Up to 50% off on Yearly Plan",
      row1: "Personalized nutrition plan tailored to your goals and dietary preferences.",
      row2: "Access to our mobile app for convenient meal tracking and progress monitoring.",
      row3: "Email support to address your questions and concerns.",
      row4: "Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.",
      CardNote: "",
      price1: "$49",
      month1: "/month",
      btn1: "Choose Plan",
    },
    {
      id: 2,
      isHomePricing: false,
      addP: true,
      title1: "Premium Plan",
      text1: "Up to 50% off on Yearly Plan",
      row1: "All the features included in the Basic Plan.",
      row2: "One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.",
      row3: "Recipe recommendations and meal planning assistance.",
      row4: "Priority email support for quicker responses to your inquiries.",
      row5: "Educational resources and guides to deepen your understanding of nutrition and healthy habits.",
      price1: "$49",
      month1: "/month",
      btn1: "Choose Plan",

    },
    {
      id: 3,
      isHomePricing: false,
      addP: true,
      Note: true,
      title1: "Ultimate Plan",
      text1: "Up to 50% off on Yearly Plan",
      row1: "All the features included in the Plus Plan.",
      row2: "Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.",
      row3: "Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.",
      row4: "Customized meal plans and recipe suggestions based on your preferences and nutritional needs.",
      row5: "Priority email and phone support for immediate assistance.",
      CardNote: "The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.",
      price1: "$49",
      month1: "/month",
      btn1: "Choose Plan",
    }

  ];
  return (
    <div className='PricingPlans container1'>
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
