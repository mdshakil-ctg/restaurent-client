

import { useState } from 'react';
import SectionTitle from './../../Shared/SectionTitle/SectionTitle';

const AddReview = () => {
    const [rating, setRating] = useState(1);
    console.log(rating)
   

    const handleClick = (value) => {
        setRating(value);
         // Call the onRate function to pass the rating to the parent component
    };
    return (
        <div>
            <SectionTitle title='give a review' subTitle='sharing is caring!!!'></SectionTitle>
            <div>
                <p>RATE Us!</p>
                <div style={{ display: 'flex', cursor: 'pointer' }} className='hover: text-yellow-500'>
            {[1, 2, 3, 4, 5].map((value) => (
                <svg
                    key={value}
                    onClick={() => handleClick(value)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={value <= rating ? 'gold' : 'gray'}
                >
                    <path d="M12 .587l3.668 7.568 8.432 1.214-6.093 5.897 1.434 8.452L12 18.897l-7.441 3.908 1.434-8.452-6.093-5.897 8.432-1.214z" />
                </svg>
            ))}
        </div>
            </div>
        </div>
    );
};

export default AddReview;