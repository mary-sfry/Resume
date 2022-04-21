import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Grid } from '@material-ui/core';
import { FaPhone, FaMapMarker } from "react-icons/fa";

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
    <Grid container className='main contact-us-con'>
      
      <Grid item xs={11} sm={11} md={8} lg={6} className='GridX'>
        <h1 className='main__title'>گپ بزنیم!</h1>
        <p className='main__desc'>
          مشتاقیم با شما آشنا بشیم و از تجربیات خوب و بد شما در زنبیل بشنویم.
        </p>
        <div className='info'>
          <div className='info__item'>
            <FaPhone className='info__icon' />
            <div className='info__content'>
              <span>09116935706</span>
            </div>
            
          </div>
          <div className='info__item'>
            <FaMapMarker className='info__icon' />
            <div className='info__content'>
              <span>رشت - گلزاران - کوچه گل سرخ</span>
            </div>
          </div>
        </div>

        <div className='contact-us'>
          <form ref={form} onSubmit={sendEmail}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6} lg={6} className='contact-us__item'>
                <label htmlFor="name" className='contact-us__label'>نام و نام خانوادگی</label>
                <input type="text" id="name" name='name' className='contact-us__input' />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} className='contact-us__item'>
                <label htmlFor="phone" className='contact-us__label'>شماره تماس</label>
                <input type="text" id="phone" name='phone' className='contact-us__input' />
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className='contact-us__item'>
              <label htmlFor="subject" className='contact-us__label'>موضوع</label>
              <select id="subject" name='subject' className='contact-us__input'>
                <option value="انتقاد">انتقاد</option>
                <option value="پیشنهاد">پیشنهاد</option>
                <option value="ارتباط با مدیر رستوران">ارتباط با مدیر رستوران</option>
                <option value="ارتباط با آشپزخانه">ارتباط با آشپزخانه</option>
                <option value="ارتباط با پرسنل">ارتباط با پرسنل</option>
                <option value="سایر">سایر...</option>
              </select>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className='contact-us__item'>
              <label htmlFor="message" className='contact-us__label'>پیام شما</label>
              <textarea rows="10" className='contact-us__input' id='message' name='message'></textarea>
              <input type="submit" value="ارسال" className='contact-us__submit' />
            </Grid>
            
          </form>
        </div>
      </Grid>
    </Grid>
  )
}

export default ContactUs