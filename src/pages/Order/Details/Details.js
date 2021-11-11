import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';

const Details = () => {
    return (
        <div className="orders" style={{ marginTop: '80px', padding: '50px 0' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img style={{ width: '80%', display: 'block', margin: '0 auto' }} src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4">Lorem ipsum</Typography>
                        <Typography style={{ margin: '30px 0' }} variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab doloribus, ipsum repellendus provident est voluptas officiis nam minima quasi magni esse, ullam, ipsa aliquam recusandae. Facilis tempore numquam itaque quod.</Typography>
                        <Typography variant="h3">$256</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box style={{ marginTop: '30px' }}>
                            <Typography style={{ textAlign: 'center' }} variant="h4">Order Your Product</Typography>
                            <form action="" style={{ width: '90%', maxWidth: '900px', margin: '30px auto' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="standard-basic" label="Product Name" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="standard-basic" label="Name" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="standard-basic" label="Email" type="email" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="standard-basic" label="Phone Number" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField id="standard-basic" label="Address" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField id="standard-basic" label="City" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField id="standard-basic" label="Zip Code" style={{ width: '70%', marginBottom: '20px' }} variant="standard" />
                                    </Grid>
                                </Grid>
                                <Button type="submit" style={{ margin: '20px auto' }} variant="contained" endIcon={<SendIcon />}>
                                    Order Now
                                </Button>
                            </form>
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Details;