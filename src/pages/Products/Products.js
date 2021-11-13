import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';

const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products`)
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, []);
    return (
        <section className="popular-products" style={{ marginTop: '80px' }}>
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4"> All Products</Typography>
                <Typography style={{ textAlign: 'center' }} variant="h6">We measure our quality standards</Typography>
                <Grid container spacing={2} style={{ margin: '20px 0' }}>
                    {
                        allProducts.map(pd => <Product
                            key={pd._id}
                            product={pd}
                        ></Product>)
                    }

                </Grid>
            </Container>
        </section>
    );
};

export default Products;