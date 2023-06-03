import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Grid, Link, List, ListItem } from '@mui/material'
import { NavLink} from 'react-router-dom';


import React from 'react'

function Header() {
    window.addEventListener("scroll", function () {
        let nav = this.document.getElementById("nav-area").getBoundingClientRect().top;
        nav >= 0 ? document.getElementById("nav").classList.remove("fixed") : document.getElementById("nav").classList.add("fixed");
    })
    return (
        <>
            <section id="top-bar">
                <Container maxWidth='lg'>
                    <Grid container className='center'>
                        <Grid item lg={6} xs={12} md={6}>
                            <span>Questions?</span>
                            <FontAwesomeIcon className='phone-icon' icon={faPhone} size="sm" style={{ color: "#fff", }} />
                            <a href='tel:123-123-1234'>123-123-1234</a>
                        </Grid>
                        <Grid item lg={6} xs={12} md={6} container className='right-bar'>
                            <div className='menu'>
                                <div className="email-area d-flex gap-2 align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} size="sm" style={{ color: "#fff", }} />
                                    <a href="mailto:youremail@site.com">youremail@site.com</a>
                                </div>
                                <div className="hours d-flex gap-2 align-items-center d-lg-block d-md-block d-none">
                                    <FontAwesomeIcon icon={faClock} size="sm" style={{ color: "#fff",marginRight:"10px" }} />
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
                <div id="nav">
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
                                        <NavLink to='/' className='text'>Home</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to='/about' className='text'>About</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to='/contact' className='text'>Contact</NavLink>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

            </section>
        </>
    )
}

export default Header