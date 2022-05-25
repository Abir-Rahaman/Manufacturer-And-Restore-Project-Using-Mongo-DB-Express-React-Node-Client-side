import React, { useEffect, useState } from 'react';
import review from '../../Asset/review.png'
import ReviewDetails from './ReviewDetails';

const Review = () => {
    const [reviews,setReview] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/review")
        .then(res => res.json())
        .then(data => setReview(data));
    },[])
    return (
        <div className='mb-24 lg:px-72'>
                <h1 className='text-3xl font-bold text-center text-primary my-9'> Happy Review With Satisfactory Products </h1>
                <div className="flex justify-center">
                <img src={review} alt="" />
            </div>
            <div className="mt-5 grid gap-8 lg:grid-cols-3 ">       
                    {
                        reviews.map( review => <ReviewDetails key={review._id} review={review} > </ReviewDetails>  )
                    } 
              </div>
        </div>
    );
};

export default Review;