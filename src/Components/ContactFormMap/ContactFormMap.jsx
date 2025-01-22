import React from 'react'
import './ContactFormMap.css'

export const ContactFormMap = () => {
  return (
    <section>
           
    <div className='thirdPart'>
        <form className='formRS'>
            <div className='flexForm'>
                <span >
                    <label>Full Name</label>
                    <input type='text' placeholder='Enter Your Name'/>
                </span>
                <span>
                    <label>Email</label>
                    <input type='email' placeholder='Enter your Email'/>
                </span>    
            </div>
            <label>Phone Number</label>
            <input type='number' placeholder='Enter your Number'/>
            <label>Message</label>
            <textarea type='text' placeholder='Enter your Message'/>
            <p>Max 250 Chars</p>
            <button>Send Message</button>
        </form>
        <div className='mapRS'>
            <img src='/img/Map.jpg' alt='...'/>
            <button><img src='/img/Buttons Container.svg' alt='...' /></button>
        </div>
    </div>
    
</section>
  )
}
