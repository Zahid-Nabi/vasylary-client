import React from 'react';
import Fab from '@mui/material/Fab';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NavigationIcon from '@mui/icons-material/Navigation';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';

const Register = () => {
    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Create an account</Typography>
                    <Typography variant="body1">Explore lots of things on the internal platform</Typography>

                    <form action="" style={{ marginTop: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <PersonIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <TextField fullWidth label="First Name" variant="standard" />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <PersonIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <TextField fullWidth label="Last Name" variant="standard" />
                                </Box>
                            </Grid>

                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <MailOutlineIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField type='email' fullWidth label="Email" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <LockOpenIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField type='password' fullWidth label="Password" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <VpnKeyIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField type='password' fullWidth label="Confirm Password" variant="standard" />
                        </Box>
                        <Button style={{ margin: '20px 0' }} type="submit" fullWidth variant="contained">Register</Button>
                    </form>
                    <small>Already have an account?
                        <Link style={{ color: 'var(--brown)', marginLeft: '2px' }} to="/login">Please Login</Link>
                    </small>
                    <Link to='/' style={{ display: 'block', marginTop: '10px', textDecoration: 'none' }}>
                        <Fab variant="extended">
                            <NavigationIcon sx={{ mr: 1 }} />
                            Go Home
                        </Fab>
                    </Link>
                </Box>
            </Container>
        </div>
    );
};

export default Register;