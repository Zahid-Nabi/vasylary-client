import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Details = (props) => {
    const id = props.id;
    const [selectedProduct, setSelectedProduct] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setSelectedProduct(data));
    }, [id]);
    const { user } = useAuth();
    const { product_name, price, description, imgURL } = selectedProduct;

    //Form Related
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const orderDetails = { ...data, status: "Pending", price: price, imgURL: imgURL };
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Order Placed Successfully");
                    reset();
                }
            });

    };
    return (
        <div className="orders" style={{ marginTop: '80px', padding: '50px 0' }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <img style={{ width: '80%', display: 'block', margin: '0 auto' }} src={imgURL} alt="" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4">{product_name}</Typography>
                        <Typography style={{ margin: '30px 0' }} variant="body1">
                            {description}
                        </Typography>
                        <Typography variant="h3">${price}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box style={{ marginTop: '30px' }}>
                            <Typography style={{ textAlign: 'center' }} variant="h4">Order Your Product</Typography>
                            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '90%', maxWidth: '900px', margin: '30px auto' }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>

                                        {
                                            product_name && <div>
                                                <label style={{ display: 'block', fontSize: '12px' }}>
                                                    Product:
                                                </label>
                                                <input
                                                    defaultValue={product_name}
                                                    variant="standard"
                                                    readOnly
                                                    style={{ width: '70%', padding: '3px', border: 'none', borderBottom: '1px solid gray' }}
                                                    {...register('product', { required: true })}
                                                />
                                            </div>
                                        }
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label style={{ display: 'block', fontSize: '12px' }}>
                                            Name:
                                        </label>
                                        <input
                                            defaultValue={user.displayName}
                                            variant="standard"
                                            readOnly
                                            style={{ width: '70%', padding: '3px', border: 'none', borderBottom: '1px solid gray' }}
                                            {...register('name', { required: true })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <label style={{ display: 'block', fontSize: '12px' }}>
                                            Email:
                                        </label>
                                        <input
                                            defaultValue={user.email}
                                            variant="standard"
                                            readOnly
                                            style={{ width: '70%', padding: '3px', border: 'none', borderBottom: '1px solid gray' }}
                                            {...register('email', { required: true })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Phone Number"
                                            style={{ width: '70%', marginBottom: '20px' }}
                                            variant="standard"
                                            {...register('phone', { required: true })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Address"
                                            style={{ width: '70%', marginBottom: '20px' }}
                                            variant="standard"
                                            {...register('address', { required: true })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="City"
                                            style={{ width: '70%', marginBottom: '20px' }}
                                            variant="standard"
                                            {...register('city', { required: true })}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            label="Zip Code"
                                            style={{ width: '70%', marginBottom: '20px' }}
                                            variant="standard"
                                            {...register('zip_code', { required: true })}
                                        />
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