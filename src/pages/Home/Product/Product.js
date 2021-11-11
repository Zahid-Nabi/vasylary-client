import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Product = (props) => {
    const { name, desc, price, imgUrl } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>

            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={imgUrl}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Purchase</Button>
                    <Button size="small">{price}</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;