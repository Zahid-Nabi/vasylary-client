import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/vasylary-logo.png';
import LoginIcon from '@mui/icons-material/Login';
import { ButtonGroup } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" style={{ background: '#ccc' }}>
                <Toolbar>
                    <NavLink to="/">
                        <img style={{ maxWidth: '100px' }} src={logo} alt="logo" />
                    </NavLink>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                    </Typography>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button style={{ color: 'var(--dark-brown)', fontWeight: 600 }}>Login <LoginIcon /></Button>
                        </ButtonGroup>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;