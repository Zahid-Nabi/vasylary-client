import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Products from './Products';

const AllProducts = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;