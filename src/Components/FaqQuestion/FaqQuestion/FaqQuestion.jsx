import React, { useState } from "react";
import faqData from "../../Data/faqData";
import "./FaqQuestion.css";

const FaqQuestion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="NGfaq-container">
      {faqData.map((item, index) => (
        <div key={index} className="NGfaq-item">
          <div
            className="NGfaq-question"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <button className="NGfaq-toggle-btn">
              {activeIndex === index ? "✖" : "+"}
            </button>
          </div>
          {activeIndex === index && (
            <div className="NGfaq-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
