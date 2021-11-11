
import { Avatar, Rating, Stack } from '@mui/material';
import React from 'react';


const Review = () => {

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.substr(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }
    return (


        <div style={{ position: 'relative', height: '100%' }}>
            <div style={{ padding: '10px', marginTop: '30px' }}>
                <p className="comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis corporis facilis molestiae hic neque nemo ipsum minima, asperiores enim tempore explicabo magnam quis provident error omnis deleniti nam, incidunt animi mollitia ut reprehenderit odit vitae cumque? Quae aut, iste distinctio esse nobis sint tenetur aliquid eaque doloremque, ipsam nulla.
                </p>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />

                <Avatar style={{ margin: '10px auto' }} {...stringAvatar('Torikul Hasan')} />
                <h6 style={{ marginTop: 0 }} className="customer-name">Zinarul Alam</h6>

            </div>
        </div>



    );
};

export default Review;