import React from 'react'
import './ContactInfo.css'
import ContactInfoCard from '../ContactInfoCard/ContactInfoCard'
import { CardInfoData } from '../Data/ContactCardInfoData'

export default function ContactInfo() {
  return (
    <div className='ContactInfo main-container'>
      <div className='WO-Buttons Container'>
        {
          CardInfoData.map((data) => (
            <ContactInfoCard
              key={data.key}
              WOIcon={data.WOIcon}
              WOLink={data.WOLink}

            />
          ))
        }
      </div>
    </div>
  )
}
