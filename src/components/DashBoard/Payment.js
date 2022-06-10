import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L18qLA4o5tgtQUCryMTWsArjQnagTRL3XcMoVH0cAkohaEhOUYXvMKqPe9i6FqYQoJjrJ2ZVxyPaYiEpoWkLNxP00Asyqdyam');

const Payment = () => {
    const {id}=useParams()
    const [paid,setPaid] = useState([])
    useEffect(()=>{
        const url = `https://ancient-badlands-88778.herokuapp.com/booking/${id}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setPaid(data));
    },[])
    return (
        <div>
            <h1 className='text-xl font-bold text-center text-primary my-9'> Your Selected item:{paid.productName} </h1>
            <div className="">
            <div class="card w-96 bg-base-100 shadow-xl mb-10">
                <div class="card-body">
                    <h2 class="card-title text-primary font-bold"> Hello , {paid.UserName} </h2>
                    <p className='font-bold' > Please Pay For <span className='text-primary'>{paid.productName}</span></p>
                    <p className='font-bold' > Amount : <span className='text-primary'>${paid.productPrice}</span></p>
                </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm paid={paid} />
                </Elements>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;