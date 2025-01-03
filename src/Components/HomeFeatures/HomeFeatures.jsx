import React from "react";
import "./HomeFeatures.css";
import CardWithIcon from "../CardWithIcon/CardWithIcon";

import Icon1 from "../../assets/images/home/Icon 1.png";
import Icon2 from "../../assets/images/home/Icon 2.png";
import Icon3 from "../../assets/images/home/Icon 3.png";
import Icon4 from "../../assets/images/home/Icon 4.png";
import Icon5 from "../../assets/images/home/Icon 5.png";
import Icon6 from "../../assets/images/home/Icon 6.png";

export default function HomeFeatures() {
  const cardsData = [
    {
      image: Icon1,
      title: "Personalized Nutrition Plans",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, pariatur optio quia deserunt necessitatibus, earum incidunt ad ex aspernatur pariatur optio quia deserunt necessitatibus.",
    },
    {
      image: Icon2,
      title: "Guidance from Certified Nutritionists",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, pariatur optio quia deserunt necessitatibus, earum incidunt ad ex aspernatur pariatur optio quia deserunt necessitatibus.",
    },
    {
      image: Icon3,
      title: "Food Tracking and Analysis",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, pariatur optio quia deserunt necessitatibus, earum incidunt ad ex aspernatur pariatur optio quia deserunt necessitatibus.",
    },
    {
      image: Icon4,
      title: "Meal Planning and Recipes",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, pariatur optio quia deserunt necessitatibus, earum incidunt ad ex aspernatur pariatur optio quia deserunt necessitatibus.",
    },
    {
      image: Icon5,
      title: "Lifestyle and Behavior Coaching",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, pariatur optio quia deserunt necessitatibus, earum incidunt ad ex aspernatur pariatur optio quia deserunt necessitatibus.",
    },
    {
      image: Icon6,
      title: "Nutritional Education and Workshops",
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, pariatur optio quia deserunt necessitatibus, earum incidunt ad ex aspernatur pariatur optio quia deserunt necessitatibus.",
    },
  ];

  return (
    <div>
      <section className="feature-section">
        <div className="hed">
          <h2>Features</h2>
          <p>
            This is a description of the feature amet consectetur adipisicing
            section.
          </p>
        </div>
        <div className="cards-container">
          {cardsData.map((card, index) => (
            <CardWithIcon
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
