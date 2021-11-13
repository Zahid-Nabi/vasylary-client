import { Button, ButtonGroup, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, product_name, description, price, imgURL } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>

            <Card style={{ maxWidth: '300px' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="200"
                    image={imgURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description.slice(0, 150)}
                        {description.length > 150 ? "..." : ""}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/orders/${_id}`} style={{ textDecoration: 'none' }}>
                        <ButtonGroup variant="contained" aria-label="text button group">
                            <Button
                                style={{ background: 'var(--brown)', fontWeight: 600 }}
                            >Purchase </Button>
                        </ButtonGroup>
                    </Link>
                    <Typography variant="h4">${price}</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;