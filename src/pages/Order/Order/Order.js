import React from 'react';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Details from '../Details/Details';

const Order = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Details id={id}></Details>
            <Footer></Footer>
        </div>
    );
};

export default Order;