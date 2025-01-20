import React from 'react'
import './FaqCard.css'
import img1 from './../../assets/images/pricing/Logo.png'
const FaqCard = () => {
    return (
        <div className='NG-faq-card'>
            <img src={img1} alt="logo" />
            <div className='NG-QUES'>
                <h6>Ask your question</h6>
                <p>Feel free to ask questions anytime</p>
            </div>
            <button>
                Ask A Question
            </button>
        </div>
    )
}

export default FaqCard