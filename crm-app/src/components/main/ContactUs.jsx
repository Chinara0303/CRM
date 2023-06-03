import { Box, Button, FormGroup, Grid, InputLabel, List, ListItem, MenuItem, Select, TextField } from '@mui/material'
import { faFacebookF, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
    const[course,setCourse]=useState('')
    const handleSet=e=>{
        setCourse(e.target.value)
    }
    return (
        <div className='contact-us-area'>
            <Grid container spacing={12}>
                <Grid item lg={4} sm={6}>
                    <div className="left-side" >
                        <img src={require('../../assets/images/callgirl.png')} alt="" />
                        <div className="contact-info">
                            <h4>Meet our Company</h4>
                            <hr />
                            <p>111 Street and house #1 Vilane, Washington 99221 USA</p>
                        </div>
                        <div className="contact-info">
                            <h4>Get in Touch</h4>
                            <hr />
                            <p><strong>Office: </strong>123-123-1234<br />
                                <strong>Fax: </strong>123-323-3343<br />
                                <strong>Toll Free: </strong>123-425-6234<br />
                            </p>
                        </div>
                        <div className="contact-info">
                            <h4>Follow Us</h4>
                            <hr />
                            <div className="social">
                                <List className='social-area'>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faFacebookF} size="lg" style={{ color: "#e79800", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faTwitter} size="lg" style={{ color: "#e79800", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faLinkedin} size="lg" style={{ color: "#e79800", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faInstagram} size="lg" style={{ color: "#e79800", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faYoutube} size="lg" style={{ color: "#e79800", }} />
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={8} sm={6}>
                    <div className="right-side">
                        <div className="right-side-title">
                            <h2>Please Fill the Form below.</h2>
                            <p>Once we receive your information our representative will get back to you within 24 hours.</p>
                        </div>
                        <div className="form-area">
                            <FormGroup>
                                <Box
                                    component="form"
                                    sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <div>
                                        <TextField
                                            id="fullWidth"
                                            label="Your FullName"
                                            fullWidth
                                            maxRows={4}
                                            variant="standard"
                                        />
                                        <TextField
                                            id="standard-textarea"
                                            label="Your phone number"
                                            fullWidth
                                            variant="standard"
                                            type='number'
                                        />
                                         <InputLabel style={{marginTop:"20px"}} id="demo-simple-select-standard-label">Select the field you wish to apply for</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standart-label"
                                            id="demo-simple-select-filled"
                                            fullWidth
                                            value={course}
                                            onChange={handleSet}
                                        >
                                            <MenuItem value='Graphic design'>Graphic design</MenuItem>
                                            <MenuItem value='Web development'>Web development</MenuItem>
                                            <MenuItem value='dIGITAL MARKETING'>dIGITAL MARKETING</MenuItem>
                                            <MenuItem value='Software engineering'>Software engineering</MenuItem>
                                        </Select>
                                        <TextField
                                            id="standard-multiline-static"
                                            label="Additional "
                                            multiline
                                            rows={4}
                                            variant="standard"
                                        />
                                    </div>
                                </Box>
                                <Button className='btn'>Send Message</Button>
                            </FormGroup>

                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default ContactUs