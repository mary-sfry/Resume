import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c9hseyg', 'template_676mj19', form.current, '_634HVXWIC459yFkP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className='main'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" />
        <label>Email</label>
        <input type="email" name="from_name" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
        </form>
      </div>
  );
};

export default ContactUs;