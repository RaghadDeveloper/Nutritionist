import React from 'react'
import img1 from '../../assets/images/home/heroImg.png'
import img2 from '../../assets/images/home/heroUsers.png'
import './HomeHero.css'
export default function HomeHero() {
    return (
        <div className='NG-hero pb-150'>
            <div className="NG-Left">
                <img src={img1} alt="HeroImage" />
            </div>
            <div className="NG-img">
                <img src={img2} alt="HeroImage" className='NG-img' />
                <p><span>430+ </span>Happy Customers</p>
            </div>
            <div className="NG-right">
                <p>
                    Transform Your ❤️ Health with
                </p>
                <h2>
                    Personalized Nutrition Coaching
                </h2>
                <p className='NG-pcontent'>
                    Welcome to Nutritionist, your partner in achieving optimal health through personalized nutrition coaching. Our certified nutritionists are here to guide you on your weight loss journey, providing customized plans and ongoing support. Start your transformation today and experience the power of personalized nutrition coaching.
                </p>
                <div className="NG-btn">
                    <button className='NG-btn1'>
                        Get Starter Today
                    </button>
                    <button className='NG-btn2'>
                        Book a Demo
                    </button>
                </div>
                <div className="NG-review">
                    <img src={img2} alt="review" />
                    <p><span>430+ </span>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

