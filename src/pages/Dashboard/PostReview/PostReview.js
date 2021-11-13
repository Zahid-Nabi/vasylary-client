import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../hooks/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import GradeIcon from '@mui/icons-material/Grade';

const PostReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`https://pure-wave-29914.herokuapp.com/reviews`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Review Posted Successfully');
                    reset();
                }
            });
    };
    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Give Review</Typography>
                    <Typography style={{ marginBottom: '20px' }} variant="body1">Give your review about our products</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <AccountCircleIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <input
                                        fullWidth
                                        defaultValue={user.displayName}
                                        variant="standard"
                                        readOnly
                                        style={{ width: '100%', padding: '3px', border: 'none', borderBottom: '1px solid gray' }}
                                        {...register('name', { required: true })}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                    <EmailIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                                    <input
                                        fullWidth
                                        defaultValue={user.email}
                                        variant="standard"
                                        readOnly
                                        style={{ width: '100%', padding: '3px', border: 'none', borderBottom: '1px solid gray' }}
                                        {...register('email', { required: true })}
                                    />
                                </Box>
                            </Grid>

                        </Grid>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <GradeIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                fullWidth
                                label="Give Your Rating out of 5"
                                variant="standard"
                                {...register('ratting', { required: true, valueAsNumber: true, min: 0, max: 5 })}
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
                                placeholder="Review Description"
                                style={{ width: '100%', padding: '10px' }}
                                {...register('review', { required: true })}
                            />
                        </Box>
                        <Button style={{ margin: '20px 0' }} type="submit" fullWidth variant="contained">Post Review</Button>
                    </form>

                </Box>

            </Container>
        </div>
    );
};

export default PostReview;