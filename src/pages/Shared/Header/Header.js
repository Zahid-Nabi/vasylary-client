import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../../images/vasylary-logo.png';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ButtonGroup, Chip, IconButton, useTheme } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import useAuth from '../../../hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Header = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            textDecoration: 'none',
            color: 'var(--blue)'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
            color: 'var(--dark-brown) !important'
        },
        navLinkContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        mobileNavItem: {
            color: 'var(--blue)',
            textDecoration: 'none'
        }
    });
    const { navItem, navIcon, navLinkContainer, mobileNavItem } = useStyle();

    //Drawer
    const [state, setState] = React.useState(false);
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" style={{ background: '#ccc' }}>
                    <Toolbar>
                        <NavLink to="/">
                            <img style={{ maxWidth: '100px' }} src={logo} alt="logo" />
                        </NavLink>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>


                        </Typography>
                        <Box className={navLinkContainer}>
                            <Link className={navItem} to="/home"><Button color="inherit">Home</Button></Link>
                            <Link className={navItem} to="/allProducts"><Button color="inherit">All Products</Button></Link>
                            <Link className={navItem} to="/orders"><Button color="inherit">Orders</Button></Link>
                            {
                                user?.email && <>
                                    <Link className={navItem} to="/dashboard">
                                        <Button color="inherit" >Dashboard</Button>
                                    </Link>
                                    <Chip
                                        icon={<AccountCircleIcon />}
                                        label={user.displayName}
                                        color="success"
                                    />
                                </>


                            }

                            {
                                user?.email ? <Link className={navItem} to='/' style={{ textDecoration: 'none' }}>
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <Button
                                            style={{ color: 'var(--dark-brown)', fontWeight: 600 }}
                                            onClick={logout}
                                        >Logout <LogoutIcon /></Button>
                                    </ButtonGroup>
                                </Link> : <Link className={navItem} to='/login' style={{ textDecoration: 'none' }}>
                                    <ButtonGroup variant="text" aria-label="text button group">
                                        <Button style={{ color: 'var(--dark-brown)', fontWeight: 600 }}>Login <LoginIcon /></Button>
                                    </ButtonGroup>
                                </Link>
                            }
                        </Box>

                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => { setState(true) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => { setState(false) }}
                    >
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List>

                                <ListItem button>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/home"><Button color="inherit">Home</Button></Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/allProducts"><Button color="inherit">All Products</Button></Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/orders"><Button color="inherit">Orders</Button></Link>
                                    </ListItemText>
                                </ListItem>

                            </List>

                        </Box>
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Header;