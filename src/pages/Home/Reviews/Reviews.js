import { Container, Typography } from '@mui/material';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Review from '../Review/Review';
import './Reviews.css';

const reviews = [
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

const Reviews = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="reviews">
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4"> Customers Review</Typography>
                <Typography style={{ textAlign: 'center', marginBottom: '20px' }} variant="h6">What our customers say about VasyLary</Typography>


                <Carousel className="main-slider">
                    {
                        reviews.map(review => <Review
                            review={review}
                        ></Review>)
                    }
                </Carousel>



            </Container>
        </section>
    );
};

export default Reviews;