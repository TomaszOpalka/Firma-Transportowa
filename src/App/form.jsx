import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./_form.scss"

const Form = () => {
    const form = useRef();
    const [sent, setSent] = useState(false)

    const [selectedDestination,setSelectedDestination]= useState('we Wrocławiu')
    const [selectedPeaple, setSelectedPeaple] = useState('0')


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_emvz0g1', 'template_9yvd53d', form.current, '9emjG74sQxZqPa56B')
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

            <label className='form-label'>Wprowadź swoje imię</label>
            <input className='form-input'
                   type="text"
                   name="from_name"
                   required={true}/>

            <label className='form-label'>Na ten email dostaniesz odpowiedź</label>
            <input className='form-input'
                   type="email"
                   name="user_email"
                   required={true}
                   placeholder='@'
            />


            <label className='form-label'>
                wybierz kierunek transportu:

                <select name="destination" value={selectedDestination}
                        onChange={e => setSelectedDestination(e.target.value)}>
                <option value='z Wrocławia'>z Wrocławia</option>
                <option value='do Wrocławia'>do Wrocławia</option>
                <option value='we Wrocławiu'>na Terenie Wrocławia</option>
                <option value='inny'>inny</option>
                </select>
            </label>

            <label className='form-label'>
                ilość osób do pomocy:

                <select name="peaple" value={selectedPeaple}
                        onChange={e => setSelectedPeaple(e.target.value)}>
                    <option value='sam wniosę  0'>sam wniosę 0</option>
                    <option value='kierowca wystarczy 1'>kierowca do pomocy 1</option>
                    <option value='potrzebna pomoc 2'>potrzebna pomoc 2</option>
                </select>
            </label>

            <label>
                <textarea className='textarea-fly' name="fly-from" required={true}/>
                <textarea className='textarea-fly' name="fl-toy" required={true}/>
            </label>

            <label className='form-label'>opisz jakiego rodzaju usługę potrzebujesz</label>
            <textarea className='textarea-info' name="message" required={true}/>
            <input className='button-send' type="submit" value="Send" />
        </form>
    );
};

export default Form;