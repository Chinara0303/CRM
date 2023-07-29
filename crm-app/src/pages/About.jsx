import { Container, Grid } from '@mui/material'
import EducationBg from '../assets/images/education_bg.jpg'
import Teachers from '../components/main/Teachers'
import React from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function About() {
  const baseUrl = "http://webfulleducation-001-site1.atempurl.com";
  const [about, setAbout] = useState([]);

  const getAllAsync = async () => {
    try {
      await axios.get(`${baseUrl}/api/about/getall`)
        .then((res) => {
          if (res.data.length > 0) {
            setAbout(res.data);
          }
        });

    } catch (error) {
      Swal.fire({
        title: 'Oops...',
        text: 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }
  useEffect(() => {
    getAllAsync()
  }, [])

  return (
    <div className='about-area'>
      <Container>
        {
          about.map(function(item,i){
          return  <Grid key={i} container spacing={3}>
            <Grid item lg={6} xs={12} sm={6}>
              <div className="left-side" style={{ backgroundImage: `url('data:image/jpeg;base64,${item.image}')` }}></div>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
              <div className="right-side">
                <h2>WELCOME TO <span>WEBFUL EDUCATION!</span></h2>
                <p>{item.subTitle}</p>
                <p>{item.description}</p>
              </div>
            </Grid>
          </Grid>
          })
        }
       
        <Teachers />
      </Container>
    </div>
  )
}

export default About