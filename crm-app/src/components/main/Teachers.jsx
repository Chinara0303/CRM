import { Container, Link, List, ListItem } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Teachers() {
    const baseUrl = "http://webfulleducation-001-site1.atempurl.com";
    const [teachers, setTeachers] = useState([]);

    const getAllAsync = async () => {
        try {
            await axios.get(`${baseUrl}/api/teacher/getall?skip=0&take=0`)
                .then((res) => {
                    if (res.data.datas.length > 0) {
                        setTeachers(res.data.datas);
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
        <div className='teachers-area'>
            <Container>
                <div className="title">
                    <h1>Our Teachers</h1>
                    <p>Some Special Teachers From The Industry!</p>
                </div>
                <div className="teachers">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            "@1.00": {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            teachers.map(function (teacher, i) {
                                return <SwiperSlide key={i}>
                                    <div className="single-teacher">
                                        <div className="img-area">
                                            <img className='img-fluid' src={`data:image/jpeg;base64,${teacher.image}`} alt="" />
                                        </div>
                                        <div className="hover-area">
                                            <List className='list-area'>
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
                                            </List>
                                        </div>
                                        <div className="teacher-detail">
                                            <p>{teacher.fullName}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </Container>
        </div>
    )
}

export default Teachers