import { Avatar, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-section">
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4">Contact Us</Typography>
                <Typography style={{ textAlign: 'center' }} variant="h6">Let’s Start a Conversation!</Typography>
                <Grid container spacing={2} style={{ margin: '20px 0' }}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={5} >
                                {/* <ul class="info" style={{ listStyle: 'none' }}>
                                    <li class="d-flex align-items-center">

                                        <FaMapMarkerAlt />
                                        <p>27 Main Street, Suite 17, Ashuganj, Brahmanbaria, Bangladesh.</p>
                                    </li>
                                    <li class="d-flex align-items-center">

                                        <FaPhone />
                                        <p>+880 1737 95 11 02</p>
                                    </li>
                                    <li class="d-flex align-items-center">

                                        <FaEnvelope />
                                        <p>jobaidunnabi@gmail.com</p>
                                    </li>
                                </ul> */}
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                                    <ListItem>
                                        <Typography variant="h5">Contact Info</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FaMapMarkerAlt />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Address" secondary="27 Main Street, Suite 17,
                                        Ashuganj, Brahmanbaria,
                                        Bangladesh." />
                                    </ListItem>

                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FaPhone />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Phone" secondary="+880 1737 95 11 02" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <FaEnvelope />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Email" secondary="jobaidunnabi@gmail.com" />
                                    </ListItem>
                                </List>
                            </Grid >
                            <Grid item xs={12} md={7} >
                                <form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField type='text' style={{ width: '100%' }} label="Your Name" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField type='email' style={{ width: '100%' }} label="Email" variant="outlined" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextareaAutosize
                                                className="textarea"
                                                aria-label="minimum height"
                                                minRows={10}
                                                placeholder="Your Message"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button style={{ marginTop: '10px' }} type="submit" variant="contained" endIcon={<SendIcon />}>
                                                Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid >
                        </Grid>
                    </Box>


                </Grid>
            </Container>
        </section>

    );
};

export default Contact;