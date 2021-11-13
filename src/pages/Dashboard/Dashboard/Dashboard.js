import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationIcon from '@mui/icons-material/Navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PayNow from '../PayNow/PayNow';
import AddProduct from '../AddProduct/AddProduct';
import { Button, ButtonGroup, Container, Fab } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import PostReview from '../PostReview/PostReview';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';

const drawerWidth = 200;

function Dashboard(props) {
    const { logout, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>

                    <ListItemText>
                        <Link to={`${url}`}>Dashboard</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>

                    <ListItemText>
                        <Link to={`${url}/paynow`}>Pay Now</Link>
                    </ListItemText>
                </ListItem>
                {
                    admin && <Box>
                        <ListItem button>

                            <ListItemText>
                                <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>

                            <ListItemText>
                                <Link to={`${url}/manageOrders`}>Manage Orders</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>

                            <ListItemText>
                                <Link to={`${url}/manageProducts`}>Manage Products</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>

                            <ListItemText>
                                <Link to={`${url}/addProduct`}>Add Product</Link>
                            </ListItemText>
                        </ListItem>
                    </Box>
                }
                <ListItem button>

                    <ListItemText>
                        <Link to={`${url}/postReview`}>Post Review</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>

                    <ListItemText>
                        <Link to={`${url}/myOrders`}>My Orders</Link>
                    </ListItemText>
                </ListItem>
                <ListItem>
                    <Link to='/' style={{ display: 'block', margin: '20px auto', textDecoration: 'none' }}>
                        <Fab variant="extended">
                            <NavigationIcon sx={{ mr: 1 }} />
                            Go Home
                        </Fab>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to='/' style={{ textDecoration: 'none', margin: '0 auto' }}>
                        <ButtonGroup variant="contained" aria-label="text button group">
                            <Button
                                style={{ background: 'var(--brown)', fontWeight: 600 }}
                                onClick={logout}
                            >Logout <LogoutIcon /></Button>
                        </ButtonGroup>
                    </Link>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                style={{ background: 'var(--dark-brown)' }}
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/* Main Content Here  */}

                <Switch>
                    <Route exact path={path}>
                        <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                                <Typography variant="h4">VasyLary</Typography>
                                <Typography style={{ marginBottom: '20px' }} variant="h5">Welcome to the Dashboard</Typography>
                            </Box>
                        </Container>
                    </Route>
                    <Route path={`${path}/paynow`}>
                        <PayNow></PayNow>
                    </Route>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/postReview`}>
                        <PostReview></PostReview>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
