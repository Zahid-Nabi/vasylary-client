
import Fab from '@mui/material/Fab';
import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NavigationIcon from '@mui/icons-material/Navigation';

const Login = () => {
    return (
        <div className="login">
            <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Sign in</Typography>
                    <Typography variant="body1">Sign in on the internal platform</Typography>

                    <form action="">
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <MailOutlineIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField type='email' fullWidth id="input-with-sx" label="Email" variant="standard" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <LockOpenIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField type='password' fullWidth id="input-with-sx" label="Password" variant="standard" />
                        </Box>
                        <Button style={{ margin: '20px 0' }} type="submit" fullWidth variant="contained">Login</Button>
                    </form>
                    <small>Don't have an account?
                        <Link style={{ color: 'var(--brown)', marginLeft: '2px' }} to="/register">Please Register</Link>
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

export default Login;