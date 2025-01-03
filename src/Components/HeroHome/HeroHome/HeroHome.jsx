import React from 'react'
import img1 from './../../../assets/images/home/heroImg.png'
import img2 from './../../../assets/images/home/heroUsers.png'
import './HeroHome.css'
function HeroHome() {
    return (
        <div className='NG-hero'>
            <div className="NG-Left">
                <img src={img1} alt="heroImg" />
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
                    <img src={img2} alt="heroUsers" />
                    <p><span>430+</span>Happy Customers</p>
                </div>
            </div>
        </div>
    )
}

export default HeroHome