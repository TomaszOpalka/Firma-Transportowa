import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./_form.scss"

const Form = () => {
    const form = useRef();
    const [sent, setSent] = useState(false)

    // const [selectedDestination,setSelectedDestination]= useState('we Wrocławiu')
    const [selectedPeaple, setSelectedPeaple] = useState('0')


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_logqm4h', 'template_snzcnbj', form.current, '8kak_DRt6FPwcAqgl')
            .then((result) => {
                console.log(result.text);
                setSent(true);
                alert('Wysłano!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                alert('Wystąpił błąd podczas wysyłania. Skontaktuj się telefonicznie lub napisz maila używając, swojej poczty przepraszamy za utrudnienia');
            });
    };

    return (
        <form className='form' ref={form} onSubmit={sendEmail}>

            <label className='form-label'>Wprowadź swoje imię :</label>
            <input className='form-input'
                   type="text"
                   name="from_name"
                   required={true}/>

            <label className='form-label'>Na ten <span className='span-email'>email</span> dostaniesz odpowiedź :</label>
            <input className='form-input'
                   type="email"
                   name="user_email"
                   required={true}
                   placeholder=''
            />


            {/*<label className='form-label'>*/}
            {/*    wybierz kierunek transportu:*/}

            {/*    <select name="destination" value={selectedDestination}*/}
            {/*            onChange={e => setSelectedDestination(e.target.value)}>*/}
            {/*    <option value='z Wrocławia'>z Wrocławia</option>*/}
            {/*    <option value='do Wrocławia'>do Wrocławia</option>*/}
            {/*    <option value='we Wrocławiu'>na Terenie Wrocławia</option>*/}
            {/*    <option value='inny'>inny</option>*/}
            {/*    </select>*/}
            {/*</label>*/}

            <label className='form-label-peaple'>
                ilość osób do pomocy:

                <select name="peaple" value={selectedPeaple}
                        onChange={e => setSelectedPeaple(e.target.value)}>
                    <option value='sam wniosę  0'>sam wniosę 0</option>
                    <option value='kierowca wystarczy 1'>kierowca do pomocy (1)</option>
                    <option value='potrzebna pomoc 2'>potrzebna pomoc (2)</option>
                </select>
            </label>

            <label className='form-label'>
                <input type="text" id='input-from'  className='input-fly left' name="fly-from" required={true} placeholder="miejsce odbioru"/>
                <input type="text" id='input-to'  className='input-fly right' name="fly-to" required={true} placeholder="miejsce dostawy"/>
            </label>

            <label className='form-label'>opisz jakiego rodzaju usługę potrzebujesz</label>
            <textarea className='textarea-info' name="message" required={true} placeholder='opisz co będziemy przewozić i w jakiej ilości oraz zaproponuj najwygodniejszy dla cb termin'/>
            <input className='button-send' type="submit" value="Send" />
        </form>
    );
};

export default Form;