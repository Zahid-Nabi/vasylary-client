import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            });
        reset();
    };
    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Make a new Admin</Typography>
                    <Typography style={{ marginBottom: '20px' }} variant="body1">You are able to make new admin for this website</Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '30px' }}>

                        <Box sx={{ display: 'flex', alignItems: 'flex-end', my: 3 }}>
                            <MailOutlineIcon sx={{ color: 'var(--brown)', mr: 1, my: 0.5 }} />
                            <TextField
                                fullWidth
                                label="Enter Email"
                                type="email"
                                variant="standard"
                                {...register('email', { required: true })}
                            />
                        </Box>

                        <Button style={{ margin: '20px 0' }} type="submit" fullWidth variant="contained">Make Admin</Button>
                    </form>
                    {
                        success && <Alert severity="success">User has been made admin successfully</Alert>
                    }

                </Box>

            </Container>
        </div>
    );
};

export default MakeAdmin;