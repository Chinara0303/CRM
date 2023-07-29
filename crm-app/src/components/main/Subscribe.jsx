import { Container } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { FormFeedback, Input } from 'reactstrap';
import Swal from 'sweetalert2';

function Subscribe() {
  const baseUrl = "http://webfulleducation-001-site1.atempurl.com";
  const [email, setEmail] = useState("")
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [invalidEmailMessage, setInvalidEmailMessage] = useState("")
  const newSubscribe = { email: email };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(newSubscribe)) {
      formData.append(key, value);
    };

    try {
      await axios.post(`${baseUrl}/api/subscribe/create`, formData, {
        headers: {
          Accept: "*/*"
        }
      })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'You are subscribed',
            showConfirmButton: false,
            timer: 1000,
          })
          setEmail("")
        })
    }
    catch (error) {
          setInvalidEmail(true);
          setInvalidEmailMessage(error.response.data)
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setInvalidEmail(false);
    setInvalidEmailMessage("")

  };

  return (
    <div className='subscribe-area' >
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-area">
            <Input type='text' invalid={invalidEmail} value={email} placeholder='Enter your email' onChange={handleEmailChange} />
            <button>Subscribe</button>
          </div>
          <span style={{color:"white"}}>{invalidEmailMessage}</span>
        </form>
      </Container>

    </div>
  )
}

export default Subscribe