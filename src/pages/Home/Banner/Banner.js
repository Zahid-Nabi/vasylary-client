import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './Banner.css';
import vase from '../../../images/vase.png';
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <div className="banner-section">
            <Container>
                <Grid container style={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" style={{ color: 'var(--brown)', letterSpacing: '2px' }}>
                            Simple and Modern
                        </Typography>
                        <Typography variant="h3" style={{ color: '#fff', fontWeight: 'bold' }}>
                            Pottery Vases
                        </Typography>
                        <Typography variant="h6" style={{ margin: '20px 0', lineHeight: 2, fontSize: '14px', fontWeight: 300, letterSpacing: '1px', color: '#999' }}>
                            Check out our pottery vase selection for the very best in unique or custom, handmade pieces from our vases shops.
                        </Typography>
                        <Link to="allProducts" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" style={{ background: 'var(--brown)' }}>
                                Lets Visit
                            </Button></Link>
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <img style={{ width: "50%", margin: "30px 0" }} src={vase} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Banner;