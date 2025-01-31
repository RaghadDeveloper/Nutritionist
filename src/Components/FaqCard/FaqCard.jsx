import React, { useEffect } from 'react'
import './FaqCard.css'
import AOS from 'aos';
import img1 from './../../assets/images/pricing/Logo.png'
const FaqCard = () => {

    useEffect(() => {
        AOS.init()
        window.addEventListener('scroll', AOS.refresh)

        return () => {
            window.removeEventListener('scroll', AOS.refresh)
        }
    }, [])
    return (
        <div className='NG-faq-card' data-aos="fade-up" >
            <img src={img1} alt="logo" />
            <div className='NG-QUES'>
                <h6>Ask your question</h6>
                <p>Feel Free to Ask questions on anytime</p>
            </div>
            <button data-aos="zoom-in">
                Ask A Question
            </button>
        </div>
    )
}

export default FaqCard