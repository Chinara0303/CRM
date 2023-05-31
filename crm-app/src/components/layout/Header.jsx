import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid, Link, List, ListItem, ListItemText } from '@mui/material'

import React from 'react'

function Header() {
    return (
        <header>
            <section id="top-bar">
                <Container maxWidth='lg'>
                    <Grid container className='center'>
                        <Grid item lg={6} xs={12} >
                            <span>Questions?</span>
                            <FontAwesomeIcon className='phone-icon' icon={faPhone} size="sm" style={{ color: "#fff", }} />
                            <a href='tel:123-123-1234'>123-123-1234</a>
                        </Grid>
                        <Grid item lg={6} xs={12} container className='right-bar'>
                            <div className='menu'>
                                <div className="email-area d-flex gap-2 align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} size="sm" style={{ color: "#fff", }} />
                                    <a href="mailto:youremail@site.com">youremail@site.com</a>
                                </div>
                                <div className="hours d-flex gap-2 align-items-center">
                                    <FontAwesomeIcon icon={faClock} size="sm" style={{ color: "#fff", }} />
                                    <span>Monday - Sunday : 09:00-21:00</span>
                                </div>

                            </div>

                            <div className="socials">
                                <Link to=''>
                                    <FontAwesomeIcon icon={faFacebookF} size="sm" style={{ color: "#fff", }} />
                                </Link>
                                <Link>
                                    <FontAwesomeIcon icon={faTwitter} size="sm" style={{ color: "#fff", }} />
                                </Link>
                                <Link>
                                    <FontAwesomeIcon icon={faInstagram} size="sm" style={{ color: "#fff", }} />
                                </Link>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section id="nav-area">
                <Container maxWidth='lg'>
                    <Grid container spacing={1}>
                        <Grid item lg={3}>
                            <div className="logo-area">
                                <img className='img-fluid' src={require('../../assets/images/logo.png')} alt="" />
                            </div>
                        </Grid>
                        <Grid item lg={9} className='right-area'>
                            <List className='d-flex list'>
                                <ListItem>
                                    <Link className='text'>Home</Link>
                                </ListItem>
                                <ListItem>
                                    <Link className='text'>About</Link>
                                </ListItem>
                                <ListItem>
                                    <Link className='text'>Contact</Link>
                                </ListItem>
                                <ListItem>
                                    <Link className='text'><FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{ color: "#174873", }} /></Link>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </header>
    )
}

export default Header