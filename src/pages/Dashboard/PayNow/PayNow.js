import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const PayNow = () => {

    return (
        <div className="register" style={{ padding: '20px 0' }}>
            <Container style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box style={{ width: '90%', maxWidth: '600px', textAlign: 'center' }}>
                    <Typography variant="h4">Pay Now</Typography>
                    <Typography style={{ marginBottom: '20px' }} variant="body1">Payment system upgradation is comming soon</Typography>


                </Box>

            </Container>
        </div>
    );
};

export default PayNow;