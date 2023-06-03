import { Container, Grid } from '@mui/material'
import EducationBg from '../assets/images/education_bg.jpg'
import Teachers from '../components/main/Teachers'
import React from 'react'

function About() {
  return (
    <div className='about-area'>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12} sm={6}>
            <div className="left-side" style={{ backgroundImage: `url(${EducationBg})` }}>

            </div>
          </Grid>
          <Grid item lg={6} xs={12} sm={6}>
            <div className="right-side">
                <h2>WELCOME TO <span>WEBFUL EDUCATION!</span></h2>
                <p>We Are Eager To Give You Best Education And Style.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam feugiat mauris quis volutpat fermentum. Nunc nec nisi vitae ipsum pharetra tincidunt. Nam vel purus dolor. Aliquam erat volutpat. Donec laoreet iaculis elementum. Aliquam ligula nisi, molestie faucibus tortor quis, vulputate imperdiet turpis. In iaculis arcu et aliquam dapibus. Nulla facilisi.</p>
                <p>Nunc pellentesque euismod felis id posuere. Nunc maximus aliquet varius. Cras ornare tristique est vel porttitor. Fusce tempor, augue sagittis congue ornare, tortor augue elementum augue, quis egestas nisi ipsum eget urna. Suspendisse vitae lectus quis turpis dapibus euismod eget a metus. Nulla eget nunc purus. Ut egestas et nulla at pretium. Pellentesque sed varius lectus.</p>
            </div>
          </Grid>
        </Grid>
        <Teachers/>
      </Container>
    </div>
  )
}

export default About