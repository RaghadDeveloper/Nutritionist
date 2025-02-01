import './FormWithMap.css'
import map from './../../assets/images/contact/Map.jpg'
export default function FormWithMap() {
    const handleFacebookClick = () => {
        window.open('https://www.facebook.com/', '_blank');
    };
    const handleTwitterClick = () => {
        window.open('https://www.twitter.com/', '_blank')
    }
    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/', '_blank')
    }
    const handleSubmite = (event) => {
        event.preventDefault();
        console.log('handleSubmite called');
        const inputs = document.querySelectorAll('.W0-input input, .W0-input textarea');
        let allFieldsFilled = true;

        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                inputs[i].classList.add('error');
                allFieldsFilled = false;
            } else {
                inputs[i].classList.remove('error');
            }
        }

        if (allFieldsFilled) {
            console.log('Form submitted successfully!');
            // إعادة تعيين الحقول في النموذج
            document.querySelector('.WO-FormElements').reset();
        } else {
            console.log('Please fill out all fields.');
        }
    };

    const handleButtonClick = (event) => {
        event.preventDefault();
        const form = document.querySelector('.WO-FormElements');
        if (form) {
            form.requestSubmit();
        }
    };


    return (
        <section className='FormWithMap main-container mb-150'>
            <div className='thirdPart'>
                <div className='WO-LeftSideContact'>
                    <form className='WO-FormElements' onSubmit={handleSubmite}>
                        <div className='WO-Row1'>
                            <div className='W0-input' >
                                <label>Full Name</label>
                                <input type='text' placeholder='Enter Your Name' />
                            </div>
                            <div className='W0-input'>
                                <label>Email</label>
                                <input type='email' placeholder='Enter your Email' />
                            </div>
                        </div>
                        <div className='W0-input'>
                            <label>Phone Number</label>
                            <input type='number' placeholder='Enter your Number' />
                        </div>
                        <div className='W0-input'>
                            <div className='W0-input'>
                                <label>Message</label>
                                <textarea type='text' placeholder='Enter your Message' maxLength={250} />
                            </div>
                            <p className='mb-0'>Max 250 Chars</p>
                        </div>
                    </form>
                    <button type='button' onClick={handleButtonClick}>Send Message</button>
                </div>
                <div className='WO-RightSideContact'>
                    <img className='map' src={map} />
                    <div className='RS-Btn'>
                        <img onClick={handleFacebookClick} src='./src/assets/images/contact/Button.png' />
                        <img onClick={handleTwitterClick} src='./src/assets/images/contact/Button(1).png' />
                        <img onClick={handleLinkedInClick} src='./src/assets/images/contact/Button(2).png' />
                    </div>
                </div>
            </div>
        </section>
    )
}