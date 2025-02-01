import React, { useState } from "react";
import faqData from "../Data/faqData";
import "./FaqQuestion.css";

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="NGfaq-container">
      {faqData.map((item, index) => (
        <div key={index} className={`NGfaq-item ${index === 0 ? "pt-0" : ""} ${index===5?"pb-0":""}`}>
          <div
            className="NGfaq-question" 
            onClick={() => toggleAccordion(index)}
          >
            <span className={activeIndex === index ? "bold-text" : ""}>{item.question}</span>
            <button className="NGfaq-toggle-btn">
              {activeIndex === index ? "✖" : "+"}
            </button>
          </div>
          {activeIndex === index && (
            <div className="NGfaq-answer" data-aos="fade-in">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
