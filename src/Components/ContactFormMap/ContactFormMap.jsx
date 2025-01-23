import './Contact.css'

function Contact (){
    const handleFacebookClick =() =>{
         window.open('https://www.facebook.com/' , '_blank');
    };
    const handleTwitterClick = () =>{
        window.open('https://www.twitter.com/' , '_blank')
    } 
    const handleLinkedInClick = () =>{
        window.open('https://www.linkedin.com/' , '_blank')
    } 
    //const[inputValue,setInputValue]=useState('');
    //const handleSubmite = (event)=>{event.preventDefaulte();
    //console.log('inputValue')}
    return (
        <>
            <section className='thirdPart'>
                <form className='formRS'>
                    <div className='flexForm'>
                        <span >
                            <label>Full Name</label>
                            <input type='text' placeholder='Enter Your Name' />
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
                    <img src='./public/img/Map.jpg' alt='...' className='map'/>
                  <div className='btnRS'>  
                    <button onClick={handleFacebookClick}><img src='./public/img/Button.png' alt='...' /></button>
                    <button onClick={handleTwitterClick}><img src='./public/img/Button(1).png' alt='...' /></button>
                    <button onClick={handleLinkedInClick}><img src='./public/img/Button(2).png' alt='...' /></button>
                  </div>
                </div>
            
            
        </section>
        
        </>
        )

    
}
export default Contact
