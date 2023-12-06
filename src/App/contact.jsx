import React from 'react';
import './_contact.scss';


function Contact(){
    const phoneNumber = '+48731167636'; // Twój numer telefonu

    const handlePhoneClick = async () => {
        try {
            await navigator.clipboard.writeText(phoneNumber);
            window.location.href = `tel:${phoneNumber}`;
        } catch (error) {
            console.error('Błąd kopiowania numeru telefonu:', error);
        }
    };

    return(
        <div className='container'>
            <div className='container__contact'>
                <div className='contact'>
                    <div className='contact--text contact--text-email'>
                     <h1>email: krystianmurawski135@gmail.com</h1>
                    </div>
                    <div className='contact__empty contact__empty-green'>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                </div>
                <div className='contact'>
                    <div className='contact--text contact--text-tel' onClick={handlePhoneClick}>
                        <h2> tel: {phoneNumber}</h2>
                        <p>we can talk in Polish and English</p>
                    </div>
                    <div className='contact__empty contact__empty-redish'>
                        <i className="fa-solid fa-mobile-retro"></i>
                    </div>
                </div>
                {/*<div className='contact'>*/}
                {/*    <div className='contact--text'>*/}
                {/*        <h2><span>SOME</span></h2>*/}
                {/*    </div>*/}
                {/*<div className='contact__empty contact__empty-blue'></div>*/}
                {/*</div>*/}
            </div>
       </div>
    )
}

export default Contact;