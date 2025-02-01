import React from "react";
import "./HomeFeatures.css";
import CardWithIcon from "../CardWithIcon/CardWithIcon";
import SectionHeader from '../SectionHeader/SectionHeader'
import {title, text, featureData} from '../Data/HomeFeaturesData'

export default function HomeFeatures() {

  return (
      <section className='main-container mb-177'>
        <SectionHeader title={title} text={text} />
        <div className="cards-container">
          {featureData.map((card, index) => (
            <CardWithIcon
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>
  );
}