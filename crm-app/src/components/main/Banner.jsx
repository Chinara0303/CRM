import { Container, Grid, List, ListItem } from '@mui/material'
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CourseImage from '../../assets/images/courses.jpg'
import TeacherImage from '../../assets/images/teacher.jpg'
import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useEffect } from 'react'

function Banner() {
  const baseUrl = "https://localhost:7069";
  const [banners, setBanners] = useState([]);

  const getAllAsync = async () => {
    try {
      await axios.get(`${baseUrl}/api/banner/getall`)
        .then((res) => {
          if (res.data.length > 0) {
            setBanners(res.data);
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
    <div className='banner-area'>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          {
            banners.map(function(banner,i){
              return <Grid key={i} item lg={6} sm={6} xs={12}>
              <div className="box-area " style={{backgroundImage:`url('data:image/jpeg;base64,${banner.image}')`}}>
                <div className="overlay"></div>
                <div className="text-area">
                  <h3><FontAwesomeIcon icon={faBook} size="sm" style={{ color: "#fff", }} />{banner.title}</h3>
                  <p>{banner.description}</p>
                  <List>
                    <ListItem className='advantage'>{banner.offer}</ListItem>
                  </List>
                </div>
              </div>
            </Grid>
            })
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Banner