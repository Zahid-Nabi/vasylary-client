import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Product from '../Home/Product/Product';

const products = [
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    },
    {
        name: 'Amphora',
        desc: 'An amphora is a type of container with a pointed bottom and characteristic shape and size which fit tightly (and therefore safely) against each other in storage rooms and packages, tied together with rope and delivered by land or sea',
        price: 140,
        imgUrl: 'https://images.pexels.com/photos/7718452/pexels-photo-7718452.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
    }
];

const Products = () => {
    return (
        <section className="popular-products" style={{ marginTop: '80px' }}>
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4"> All Products</Typography>
                <Typography style={{ textAlign: 'center' }} variant="h6">We measure our quality standards</Typography>
                <Grid container spacing={2} style={{ margin: '20px 0' }}>
                    {
                        products.map(pd => <Product
                            product={pd}
                        ></Product>)
                    }

                </Grid>
            </Container>
        </section>
    );
};

export default Products;