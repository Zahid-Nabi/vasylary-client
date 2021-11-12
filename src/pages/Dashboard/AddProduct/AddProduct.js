import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Add Product</Typography>
                    <Typography style={{ marginBottom: '20px' }} variant="body1">Add a new product and enrich the store</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <MoveToInboxIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <TextField
                                        fullWidth
                                        label="Product Name"
                                        variant="standard"
                                        {...register('product_name', { required: true })}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <AttachMoneyIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <TextField
                                        fullWidth
                                        label="Price"
                                        variant="standard"
                                        {...register('price', { required: true })}
                                    />
                                </Box>
                            </Grid>

                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <AddPhotoAlternateIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                fullWidth
                                label="Product Image URL"
                                variant="standard"
                                {...register('imgURL', { required: true })}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>

                            {/* <TextField
                                label="Product Description"
                                fullWidth
                                minHeight="300"
                                variant="standard"
                                {...register('description', { required: true })}
                            /> */}
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={4}
                                placeholder="Product Description"
                                style={{ width: '100%', padding: '10px' }}
                                {...register('description', { required: true })}
                            />
                        </Box>
                        <Button style={{ margin: '20px 0' }} type="submit" fullWidth variant="contained">Add Product</Button>
                    </form>

                </Box>

            </Container>
        </div>
    );
};

export default AddProduct;