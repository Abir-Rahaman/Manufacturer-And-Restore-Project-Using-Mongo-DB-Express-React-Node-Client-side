import React from 'react';

const ReviewDetails = ({review}) => {
    const {name,description,ratings}= review;
    return (
        <div class="card w-96 bg-purple-300 text-primary-content">
        <div class="card-body">
          <h2 class="text-bold text-white text-2xl text-center">{name}</h2>
          <p className='text-bold text-white text-center'> Client Say : {description} </p>
          <p className='text-bold text-white text-center'> Ratings: {ratings}star</p>
        </div>
      </div>
    );
};

export default ReviewDetails;