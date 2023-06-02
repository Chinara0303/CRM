import { Container, Grid, Link, List, ListItem } from '@mui/material'
import BgImage from '../../assets/images/footer-bg.jpg'
import { faEnvelope, faHouse, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedin, faTwitter,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'


function Footer() {
    return (
        <div className='footer-area' style={{ backgroundImage: `url(${BgImage})` }} >
            <div className="overlay"></div>
            <Container>
                <div className="footer-content">
                    <Grid container spacing={2} className='d-flex'>
                        <Grid item lg={6} xs={6}>
                            <div className="time-title">
                                <h4>Officce Hours</h4>
                                <div className="line"></div>
                            </div>
                            <List>
                                <ListItem>Monday: 09:00 - 21:00</ListItem>
                                <ListItem>Tuseday: 09:00 - 21:00</ListItem>
                                <ListItem>Wednesday: 09:00 - 21:00</ListItem>
                                <ListItem>Thursday: 09:00 - 21:00</ListItem>
                                <ListItem>Friday: 09:00 - 21:00</ListItem>
                                <ListItem>Saturday: 10:00 - 20:00</ListItem>
                                <ListItem>Sunday: 10:00 - 20:00</ListItem>
                            </List>
                        </Grid>
                        <Grid item lg={6} xs={6}>
                            <div className="time-title">
                                <h4>Contact</h4>
                                <div className="line"></div>
                            </div>
                            <List>
                                <ListItem>
                                    <FontAwesomeIcon icon={faHouse} size="xl" style={{ color: "#fff" }} />
                                    <div className="text-area">
                                        <p>ADDRESS</p>
                                        <p>132 Jefferson Avenue, Suite 22, Redwood City, CA 94872,</p>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <FontAwesomeIcon icon={faPhone} size="xl" style={{ color: "#fff" }} />
                                    <div className="text-area">
                                        <p>Phone</p>
                                        <p>123 123 1234</p>
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <FontAwesomeIcon icon={faEnvelope} size="xl" style={{ color: "#fff" }} />
                                    <div className="text-area">
                                        <p>Email</p>
                                        <p>ateeq@yoursite.com</p>
                                    </div>
                                </ListItem>
                                <hr />
                            </List>
                            <div className="social">
                                <List className='social-area'>
                                    <h5>Social: </h5>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faFacebookF} size="md" style={{ color: "#fff", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faTwitter} size="md" style={{ color: "#fff", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faLinkedin} size="md" style={{ color: "#fff", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faInstagram} size="md" style={{ color: "#fff", }} />
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Link>
                                            <FontAwesomeIcon className='icon' icon={faYoutube} size="md" style={{ color: "#fff", }} />
                                        </Link>
                                    </ListItem>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            </Container>
        </div>
    )
}

export default Footer