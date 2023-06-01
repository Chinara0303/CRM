import { Container, Grid, List, ListItem } from '@mui/material'
import { faBook, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Banner() {
  return (
    <div className='banner-area'>
      <Container maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
            <div className="box-area " >
              <img src={require('../../assets/images/courses.jpg')} alt="" />
              <div className="overlay"></div>
              <div className="text-area">
                <h3><FontAwesomeIcon icon={faBook} size="sm" style={{ color: "#fff", }} /> OUR COURSES</h3>
                <p>We are very happy to introduce many dynamic courses which includes many new and great features happy to …</p>
                <List>
                  <ListItem className='advantage'>Better designed programs for you</ListItem>
                  <ListItem className='advantage'>Online Availability to sources</ListItem>
                  <ListItem className='advantage'> Helping Board in your learning management</ListItem>
                </List>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="box-area " >
              <img className='img-fluid' src={require('../../assets/images/teacher.jpg')} alt="" />
              <div className="overlay"></div>
              <div className="text-area">
                <h3><FontAwesomeIcon icon={faUsers} size="sm" style={{ color: "#fff", }} /> OUR Teachers</h3>
                <p>We have got some best teachers available in town who can help you to polish your skills as much as you can …</p>
                <List>
                  <ListItem className='advantage'>Better designed programs for you</ListItem>
                  <ListItem className='advantage'>Online Availability to sources</ListItem>
                  <ListItem className='advantage'> Helping Board in your learning management</ListItem>
                </List>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Banner