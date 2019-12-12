import React from 'react';
import './Contact.css';
import { Component } from 'react';
import LinkedIn from './img/linkedin.png'
import email from './img/email.png'
import phone from './img/phone.png'

class Contact extends Component{
  render() {
    return (
      <div id = "Contact" className="Contact">
        <h2>Contact Information</h2>
        <h3>LinkedIn</h3>
        <img src={LinkedIn} alt="Logo" />
        <p>Connect with me on LinkedIn</p>
        <a href="https://www.linkedin.com/in/alec-shears/" target="_blank">View Profile</a>
        <h3>Email</h3>
        <img src={email} alt="Logo" />
        <p>Professional: alec.shears@ufl.edu</p>
        <p>Personal: alecshears24@gmail.com</p>
        <h3>Phone</h3>
        <img src={phone} alt="Logo" />
        <p>Cell: 954-562-4048</p>
      </div>
       
    
     
    );
  }
}

export default Contact;
