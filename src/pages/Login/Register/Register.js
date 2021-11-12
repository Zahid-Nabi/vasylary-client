import React from 'react';
import Fab from '@mui/material/Fab';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NavigationIcon from '@mui/icons-material/Navigation';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PersonIcon from '@mui/icons-material/Person';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user, registerUser, loading, error } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { firstname, lastname, email, password, password2 } = data;
        const name = firstname + ' ' + lastname;
        if (password !== password2) {
            alert('Sorry! Your confirmation password did not match. Try again');
            return;
        }
        registerUser(email, password, name);
        reset();
    };
    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {!loading && <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Create an account</Typography>
                    <Typography style={{ marginBottom: '20px' }} variant="body1">Explore lots of things on the internal platform</Typography>
                    {
                        user?.email && <Alert severity="success">Congrats!! User Created Successfully</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <PersonIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <TextField
                                        fullWidth label="First Name" variant="standard"
                                        {...register('firstname', { required: true })}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <PersonIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        variant="standard"
                                        {...register('lastname', { required: true })}
                                    />
                                </Box>
                            </Grid>

                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <MailOutlineIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                type='email'
                                fullWidth label="Email"
                                variant="standard"
                                {...register('email', { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <LockOpenIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                type='password'
                                fullWidth
                                label="Password"
                                variant="standard"
                                {...register('password', { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <VpnKeyIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                type='password'
                                fullWidth
                                label="Confirm Password"
                                variant="standard"
                                {...register('password2', { required: true })}
                            />
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
                </Box>}
                {loading && <CircularProgress />}
            </Container>
        </div>
    );
};

export default Register;