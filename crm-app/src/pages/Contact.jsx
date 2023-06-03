import { Container } from '@mui/material'
import React from 'react'
import ContactUs from '../components/main/ContactUs'

function Contact() {
  return (
    <div className='contact-area'>
      <Container>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.6644347053593!2d-122.25461622336042!3d37.46864416801076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa3c5779b6f23%3A0xdbdce0b5ab2271d5!2sJefferson%20Ave%2C%20Redwood%20City%2C%20CA%2C%20USA!5e0!3m2!1sen!2saz!4v1685795139458!5m2!1sen!2saz" width="600" height="250" style={{border:'0',width:"100%"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <ContactUs/>
      </Container>
    </div>
  )
}

export default Contact