import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_emvz0g1', 'template_9yvd53d', form.current, '9emjG74sQxZqPa56B')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Wprowadź swoje imię</label>
            <input type="text" name="user_name" />

            <label>Na ten email dostaniesz odpowiedź</label>
            <input type="email" name="user_email" />


            <label>opisz Jakiego rodzaju usługę potrzebujesz</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Form;