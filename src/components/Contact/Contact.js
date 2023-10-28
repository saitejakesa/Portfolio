import React, { useRef } from 'react'
import './Contact.css'
import guviIcon from '../../assets/guvi.jpg';
import emailjs from '@emailjs/browser';
import { BsGithub} from 'react-icons/bs';
import { BsLinkedin} from 'react-icons/bs';
import { SiHackerrank } from 'react-icons/si';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_b1pi0xc', 'template_xcanqo8', form.current, 'RMrKcoKe7nILQTrl9')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent');
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    
    <section id="contactpage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out the form to discuss any work opportunities
            </span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name"  name='from_name'/>
                <input type="email" className="email" placeholder="Your Email" name='from_email' />
                <textarea name="message" cols="30" rows="5" className="msg" placeholder="Your Message"></textarea>
                <button type="submit" vaalue="Send" className="submitbtn">Submit</button>
                <div className="links">
                <a href="https://www.linkedin.com/in/saiteja-kesa-907aa0131/" target="_blank"><BsLinkedin className="link"/></a>
                <a href="https://github.com/" target="_blank"><BsGithub className="link" /></a>
                <a href="https://www.hackerrank.com/dashboard" target="_blank"><SiHackerrank className="link" /></a>
                <a href="https://www.guvi.in/" target="_blank"><img src={guviIcon} alt="Guvi" className="link" /></a>
                </div>

            </form>
        </div>
    </section>
  )
}

export default Contact