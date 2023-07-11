import { Box, Container, CardActionArea, Typography, Collapse, Tab, Tabs, Card, CardMedia, CardContent, Grid, CardActions, IconButton, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


function Course() {
 
    const baseUrl = "http://webfulleducation-001-site1.atempurl.com";
    const [courses, setCourses] = useState([]);

    const getAllAsync = async () => {
        try {
            await axios.get(`${baseUrl}/api/education/getall`)
                .then((res) => {
                    if (res.data.length > 0) {
                        setCourses(res.data);
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
        <div className='course-area'>
            <Container>
                <div className="title">
                    <h1>Our Courses</h1>
                    <p>Find Best Course For Yourself!</p>
                </div>
                <div className="d-flex gap-5 flex-wrap">
                {
                    courses.map(function (item, i) {
                        return <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`data:image/jpeg;base64,${item.image}`}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.duration}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    })
                }
                </div>
               

            </Container>
        </div >
    )
}

export default Course