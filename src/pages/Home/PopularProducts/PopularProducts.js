import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './PopularProducts.css';
import Product from '../Product/Product';



const PopularProducts = () => {
    const [popularProducts, setPopularProducts] = useState([]);
    useEffect(() => {
        fetch(`https://pure-wave-29914.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setPopularProducts(data));
    }, []);
    return (
        <section className="popular-products">
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4"> Popular Products</Typography>
                <Typography style={{ textAlign: 'center' }} variant="h6">We measure our quality standards</Typography>
                <Grid container spacing={2} style={{ margin: '20px 0' }}>
                    {
                        popularProducts.slice(0, 6).map(pd => <Product
                            key={pd._id}
                            product={pd}
                        ></Product>)
                    }

                </Grid>
            </Container>
        </section>


    );
};

export default PopularProducts;