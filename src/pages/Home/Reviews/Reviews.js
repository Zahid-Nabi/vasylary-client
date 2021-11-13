import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    return (
        <section className="reviews">
            <Container>
                <Typography style={{ textAlign: 'center' }} variant="h4"> Customers Review</Typography>
                <Typography style={{ textAlign: 'center', marginBottom: '20px' }} variant="h6">What our customers say about VasyLary</Typography>


                <Carousel className="main-slider">
                    {
                        reviews.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </Carousel>



            </Container>
        </section>
    );
};

export default Reviews;