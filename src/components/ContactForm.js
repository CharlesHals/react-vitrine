import React, { useRef } from 'react';
import emailjs, { init } from '@emailjs/browser';
init(process.env.REACT_APP_REACTJSID)

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const formMess = document.querySelector(".formMessage")
        emailjs.sendForm(
            'service_42dthlk',
            'template_qrtnm1o',
            form.current,
            process.env.REACT_APP_REACTJSID
        )
            .then((result) => {
                console.log(result.text);
                form.current.reset()
                formMess.innerHTML = "<p class='success'>Message Envoyé !</p>"
                setTimeout(() => {
                    formMess.innerHTML = ""
                }, 2500)
            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = "<p class='error'>Une erreur est survenue. Veuillez réessayer.</p>"
                setTimeout(() => {
                    formMess.innerHTML = ""
                }, 2500)
            });
    };

    return (
        <div className="form-container">
            <h2>Contactez-nous</h2>
            <form ref={form} onSubmit={sendEmail} className='form-content'>
                <label>Nom</label>
                <input type="text" name="name" required autoComplete='off' id="name" />
                <label>Email</label>
                <input type="email" name="email" required autoComplete='off' id="email" />
                <label>Message</label>
                <textarea name="message" id="mess" />
                <input type="submit" value="Envoyer" className='hover button' />
            </form>
            <div className="formMessage"></div>
        </div>

    );
};

export default ContactForm;