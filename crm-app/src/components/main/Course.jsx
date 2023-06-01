import { Box, Container, Collapse, Tab, Tabs, Card, CardMedia, CardContent, Grid, CardActions, IconButton, List, ListItem } from '@mui/material'
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import TabPanel from '@mui/lab/TabPanel';
import { faAnglesDown, faCodeCommit, faHourglass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Course() {
    const [value, setValue] = useState('1');
    const [expanded, setExpanded] = useState(false);
    const [open,setOpen]=useState(false);
    const [click,setClick]=useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleOpenClick = () => {
        setOpen(!open);
    };
    const handleClickClick = () => {
        setClick(!click);
    };

    return (
        <div className='course-area'>
            <Container>
                <div className="title">
                    <h1>Our Courses</h1>
                    <p>Find Best Course For Yourself!</p>
                </div>
                <TabContext value={value} >
                    <Box>
                        <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile>
                            <Tab label="Graphic Designing" value="1" />
                            <Tab label="Web Development" value="2" />
                            <Tab label="Digital Marketing" value="3" />
                            <Tab label="Software Engineering" value="4" />
                        </Tabs>
                    </Box>
                    <TabPanel value="1">
                        <Grid container spacing={6}>
                            <Grid item lg={4} md={4}>
                                <Card className='cart'>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={require('../../assets/images/graphics-design-1.jpg')}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className="text-area">
                                            <h4>Learn Printing designing</h4>
                                            <p>Introduction Web Sites / Web Applications have taken immense importance in contemporary business. They must be</p>
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
                                            <FontAwesomeIcon icon={faAnglesDown} size="lg" style={{ color: "#e79800", }} />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <List>
                                                <p className='header'>What learn</p>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Learn and practice graphic design</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Brand and market yourself</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Learn the business of design</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Accept most incoming work</ListItem>
                                            </List>
                                            <List>
                                                <p className='header'>Duration & Frequency</p>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faHourglass} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />4Months(16weeks)</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faHourglass} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />3 sessions of 2 hours in a week.</ListItem>
                                            </List>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                            <Grid item lg={4} md={4}>
                                <Card className='cart'>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={require('../../assets/images/graphics-design-1.jpg')}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className="text-area">
                                            <h4>Learn Printing designing</h4>
                                            <p>Introduction Web Sites / Web Applications have taken immense importance in contemporary business. They must be</p>
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ExpandMore
                                            expand={open}
                                            onClick={handleOpenClick}
                                            aria-expanded={open}
                                        >
                                            <FontAwesomeIcon icon={faAnglesDown} size="lg" style={{ color: "#e79800", }} />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <List>
                                                <p className='header'>What learn</p>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Learn and practice graphic design</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Brand and market yourself</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Learn the business of design</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Accept most incoming work</ListItem>
                                            </List>
                                            <List>
                                                <p className='header'>Duration & Frequency</p>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faHourglass} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />4Months(16weeks)</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faHourglass} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />3 sessions of 2 hours in a week.</ListItem>
                                            </List>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                            <Grid item lg={4} md={4}>
                                <Card className='cart'>
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={require('../../assets/images/graphics-design-1.jpg')}
                                        alt="Paella dish"
                                    />
                                    <CardContent>
                                        <div className="text-area">
                                            <h4>Learn Printing designing</h4>
                                            <p>Introduction Web Sites / Web Applications have taken immense importance in contemporary business. They must be</p>
                                        </div>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <ExpandMore
                                            expand={click}
                                            onClick={handleClickClick}
                                            aria-expanded={click}
                                        >
                                            <FontAwesomeIcon icon={faAnglesDown} size="lg" style={{ color: "#e79800", }} />
                                        </ExpandMore>
                                    </CardActions>
                                    <Collapse in={click} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <List>
                                                <p className='header'>What learn</p>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Learn and practice graphic design</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Brand and market yourself</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Learn the business of design</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faCodeCommit} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />Accept most incoming work</ListItem>
                                            </List>
                                            <List>
                                                <p className='header'>Duration & Frequency</p>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faHourglass} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />4Months(16weeks)</ListItem>
                                                <ListItem className='subtitle'><FontAwesomeIcon icon={faHourglass} size="sm" style={{ color: "#e79800", marginRight: "10px" }} />3 sessions of 2 hours in a week.</ListItem>
                                            </List>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item zdfvgb</TabPanel>
                </TabContext>
            </Container>
        </div >
    )
}

export default Course