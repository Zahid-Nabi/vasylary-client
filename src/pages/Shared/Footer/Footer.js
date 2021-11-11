import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Avatar, Button, Container, Grid, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import logo from '../../../images/vasylary-logo.png';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <img className="footer-logo" style={{ width: '75%', maxWidth: '200px', display: 'block', margin: '0 auto 20px' }} src={logo} alt="" />
                            <p style={{ fontSize: '14px', letterSpacing: '1px', lineHeight: 1.5 }}>Each piece of VasyLary is unique and individual as the next, with layer upon layer of reactive glaze to create VasyLary's vibrant and bold decoration. Items are personalised with the artist's own individual mark, adding value to the collectability of each piece.</p>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <h5 className="footer-title">Learn More</h5>
                            <List dense='true' className="footer-links" style={{ fontSize: '14px' }}>
                                <ListItem className="list-item">What’s New</ListItem>
                                <ListItem className="list-item">About Us</ListItem>
                                <ListItem className="list-item">Terms and Conditions</ListItem>
                                <ListItem className="list-item">Privacy Policy</ListItem>
                                <ListItem className="list-item">FAQ</ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className="contact-us">
                            <h5 className="footer-title">Contact Us</h5>

                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
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
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <h5 className="footer-title">Newsletter</h5>
                            <form className="row gx-3 gy-2 align-items-center">
                                <p style={{ fontSize: '14px', letterSpacing: '1px', lineHeight: 1.5 }}>Every month we'll reach out with our best deals and news about our store. All you need to do is subscribe :)</p>
                                <TextField type="email" placeholder="Your Email" variant="outlined" style={{ background: 'var(--brown)', borderRadius: '5px', width: '100%' }} />
                                <Button style={{ marginTop: '10px' }} type="submit" variant="contained" endIcon={<SendIcon />}>
                                    Subscribe
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <hr />
            <div className="footer-bottom">
                <Container>
                    <div style={{ display: 'block', textAlign: 'center' }}>
                        <div className="copyright">
                            <p>&copy; Copyright 2021 | All rights reserved by VasyLary</p>
                        </div>
                        <ul className="social-icons">
                            <li><FaFacebookF /></li>
                            <li><FaTwitter /></li>
                            <li><FaGoogle /></li>
                            <li><FaInstagram /></li>
                            <li><FaLinkedinIn /></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </div >
    );
};

export default Footer;