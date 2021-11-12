
import Fab from '@mui/material/Fab';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { user, loginUser, loading, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const { email, password } = data;
        loginUser(email, password, location, history);
        reset();
    };

    return (
        <div className="login">
            <Container style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {!loading && <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Sign in</Typography>
                    <Typography style={{ marginBottom: '20px' }} variant="body1">Sign in on the internal platform</Typography>
                    {
                        user?.email && <Alert severity="success">You Logged in Successfully</Alert>
                    }
                    {
                        error && <Alert severity="error">{error}</Alert>
                    }
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <MailOutlineIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                type='email'
                                fullWidth
                                id="input-with-sx"
                                label="Email"
                                variant="standard"
                                {...register('email', { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <LockOpenIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                type='password'
                                fullWidth
                                id="input-with-sx"
                                label="Password"
                                variant="standard"
                                {...register('password', { required: true })}
                            />
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
                </Box>}
                {loading && <CircularProgress />}
            </Container>
        </div>
    );
};

export default Login;