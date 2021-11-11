import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import PopularProducts from '../PopularProducts/PopularProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;