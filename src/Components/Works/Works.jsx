import React from "react";
import "./Works.css";
import CardWithIcon from "../CardWithIcon/CardWithIcon";
import SectionHeader from "../SectionHeader/SectionHeader";
import { workdata, title, text } from "../Data/workdata"; 

export default function Works() {
  return (
    <div>
      <div className="works-section main-container">
        <SectionHeader title={title} text={text} />
        <div className="work-wrapper">
          <div className="cards-container">
            {workdata.map((card, index) => (
              <CardWithIcon
                key={index}
                image={card.image}
                title={card.title}
                text={card.text}
                showNumber={card.showNumber}
                numberImage={card.numberImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
