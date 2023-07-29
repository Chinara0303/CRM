import { Box, Button, FormGroup, Grid, InputLabel, List, ListItem, MenuItem, Select, TextField,FormHelperText } from '@mui/material'
import { faFacebookF, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Form, FormFeedback } from 'reactstrap'
import Swal from 'sweetalert2';
import axios from 'axios';



function ContactUs() {
    const baseUrl = "http://webfulleducation-001-site1.atempurl.com";

    const [invalidFullName, setInvalidFullName] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPhone, setInvalidPhone] = useState(false);
    const [invalidEmailMessage, setInvalidEmailMessage] = useState("");
    const [invalidFullNameMessage, setInvalidFullNameMessage] = useState("");
    const [invalidPhoneMessage, setInvalidPhoneMessage] = useState("");

    const [educationId, setEducationId] = useState();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState("");
    const [educations, setEducations] = useState([])
    const [setting, setSetting] = useState([]);

    const newContact = { fullName: fullName, phone: phone, message: message, email: email, educationId: educationId }

    const getAllAsync = async () => {
        try {
            await axios.get(`${baseUrl}/api/education/getall`)
                .then((res) => {
                    if (res.data.length > 0) {
                        setEducations(res.data)
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

    const getSettingAsync = async () => {
        try {
          await axios.get(`${baseUrl}/api/setting/getall`)
            .then((res) => {
                setSetting(res.data);
              
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const [key, value] of Object.entries(newContact)) {
            formData.append(key, value);
        };

        try {
            await axios.post(`${baseUrl}/api/contact/create`, formData, {
            })
                .then(() => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Thanks!',
                        showConfirmButton: false,
                        timer: 1000,
                    })

                    setFullName('');
                    setPhone('');
                    setMessage('');
                    setEmail('');
                    setEducationId();
                })
        }
        catch (error) {
            const errors = error.response.data.errors;
            if (errors.FullName != undefined) {
                if (errors.FullName.length > 0) {
                    setInvalidFullName(true);
                    setInvalidFullNameMessage(errors.FullName)
                }
            }
            if (errors.Email != undefined) {
                if (errors.Email.length > 0) {
                    setInvalidEmail(true);
                    setInvalidEmailMessage(errors.Email)
                }
            }
            if (errors.Phone != undefined) {
                if (errors.Phone.length > 0) {
                    setInvalidPhone(true);
                    setInvalidPhoneMessage(errors.Phone)
                }
            }
        }
    };

    const handleEducationIdChange = e => {
        setEducationId(e.target.value)
    }
    const handleFullNameChange = e => {
        setFullName(e.target.value)
        setInvalidFullName(false)
    }
    const handlePhoneChange = e => {
        setPhone(e.target.value)
        setInvalidPhone(false)
    }
    const handleMessageChange = e => {
        setMessage(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
        setInvalidEmail(false)
    }

    useEffect(() => {
        getAllAsync()
        getSettingAsync()
    }, [])

    return (
        <div className='contact-us-area'>
            <Grid container spacing={12}>
                <Grid item lg={4} sm={6}>
                    <div className="left-side" >
                        <img src={require('../../assets/images/callgirl.png')} alt="" />
                        <div className="contact-info">
                            <h4>Meet our Company</h4>
                            <hr />
                            <p>{setting.Address}</p>
                        </div>
                        <div className="contact-info">
                            <h4>Get in Touch</h4>
                            <hr />
                            <p><strong>Office: </strong>{setting.Phone}<br />
                                <strong>Fax: </strong>{setting.Fax}<br />
                                <strong>Toll Free: </strong>{setting.TollFree}<br />
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
                            <Form onSubmit={(e) => handleSubmit(e)}>
                                <Box
                                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                                    noValidate
                                >
                                    <FormGroup>
                                        <TextField
                                            id="fullWidth"
                                            label="Your fullName"
                                            fullWidth
                                            maxRows={4}
                                            variant="standard"
                                            value={fullName}
                                            error={invalidFullName}
                                            onChange={(e) => handleFullNameChange(e)}
                                            name="fullName"
                                            autoComplete="off"
                                        />
                                        {
                                            invalidFullName && (
                                                <FormHelperText error>{invalidFullNameMessage}</FormHelperText>
                                            )
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <TextField
                                            id="standard-textarea"
                                            label="Your phone number"
                                            fullWidth
                                            variant="standard"
                                            autoComplete="off"
                                            name="phone"
                                            error={invalidPhone}
                                            value={phone}
                                            onChange={(e) => handlePhoneChange(e)}
                                        />
                                         {
                                            invalidPhone && (
                                                <FormHelperText error>{invalidPhoneMessage}</FormHelperText>
                                            )
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <TextField
                                            id="standard-textarea"
                                            label="Your email"
                                            fullWidth
                                            variant="standard"
                                            autoComplete="off"
                                            type='text'
                                            name="email"
                                            error={invalidEmail}
                                            value={email}
                                            onChange={(e) => handleEmailChange(e)}
                                        />
                                         {
                                            invalidEmail && (
                                                <FormHelperText error>{invalidEmailMessage}</FormHelperText>
                                            )
                                        }
                                    </FormGroup>
                                    <FormGroup>
                                        <InputLabel style={{ marginTop: "20px" }} id="demo-simple-select-standard-label">Select the field you wish to apply for</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-standart-label"
                                            id="demo-simple-select-filled"
                                            fullWidth
                                            value={educationId}
                                            name="educationId"
                                            autoComplete="off"
                                            onChange={(e) => handleEducationIdChange(e)}>
                                            {
                                                educations.map(function (education, i) {
                                                    return <MenuItem key={i} value={education.id}>{education.name}</MenuItem>
                                                })
                                            }

                                        </Select>
                                    </FormGroup>
                                    <FormGroup>
                                        <TextField
                                            id="standard-multiline-static"
                                            label="Additional "
                                            multiline
                                            rows={4}
                                            variant="standard"
                                            name="message"
                                            autoComplete="off"
                                            value={message}
                                            onChange={(e) => handleMessageChange(e)}
                                        />
                                    </FormGroup>
                                    <Button type="submit" className='btn'>Send Message</Button>
                                </Box>
                            </Form>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default ContactUs