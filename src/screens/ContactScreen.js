import React from 'react';
import emailjs from 'emailjs-com';
import DrawerComponent from '../components/NewDrawer';
import { Hidden } from '@material-ui/core';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function ContactUs() {

  const style = {
    positioning: {
      display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    notMobileForm: {
      width: "295px", margin: "auto"
    },
    notMobileInput: {
      width: "300px"
    },
    notMobileTextArea: {
      resize: "none", overflow: "auto", height: "100px"
    },
    mobileForm: {
      width: "290px", margin: "auto"
    },
    mobileInput: {
      width: "275px"
    },
    mobileTextArea: {
      resize: "none", overflow: "auto", height: "100px"
    }
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_gcOzyuLG', e.target, 'user_OMN9LllzUREHvvlzzbhbn')
      .then((result) => {
        alert("Sent!");
        console.log(result.text);
      }, (error) => {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(error));
        console.log(error.text);
      });
    document.getElementById("contact-form").reset();
  }


  return (
    <DrawerComponent>
      <div>

        <h1 style={style.positioning}>
          Contact Us
            </h1>

        <Hidden xsDown>

          <form style={style.notMobileForm} id="contact-form" onSubmit={sendEmail} >
            <label>Name</label>
            <input style={style.notMobileInput} type="text" name="from_name" placeholder="Joe Bloggs" required />

            <label>Email</label>
            <input style={style.notMobileInput} type="email" name="from_email" placeholder="joebloggs@hotmail.com" required />

            <label>Phone</label>
            <input style={style.notMobileInput} type="tel" name="contact_number" pattern="0[0-9]{9,11}" placeholder="012222222 or 0462222222 or 0862222222" required />

            <label>Message</label>
            <TextareaAutosize style={style.notMobileTextArea} cols="41" name="message" placeholder="Hello, can I book lessons with you?" required />

            <input type="submit" value="Send" />
          </form>

        </Hidden>

        <Hidden smUp>
          <form style={style.mobileForm} id="contact-form" onSubmit={sendEmail} >
            <label>Name</label>
            <input style={style.mobileInput} type="text" name="from_name" placeholder="Joe Bloggs" required />

            <label>Email</label>
            <input style={style.mobileInput} type="email" name="from_email" placeholder="joebloggs@hotmail.com" required />

            <label>Phone</label>
            <input style={style.mobileInput} type="tel" name="contact_number" pattern="0[0-9]{9,11}" placeholder="012222222 or 0462222222 or 0862222222" required />

            <label>Message</label>
            <TextareaAutosize style={style.mobileTextArea} cols="37" name="message" placeholder="Hello, can I book lessons with you?" required />

            <input type="submit" value="Send" />
          </form>
        </Hidden>

      </div>
    </DrawerComponent>
  );

}