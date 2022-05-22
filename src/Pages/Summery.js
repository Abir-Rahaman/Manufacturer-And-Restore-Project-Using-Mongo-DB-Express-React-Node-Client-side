import React from 'react';
import handshake from '../Asset/handshake.png'
import flag from '../Asset/flag.png'
import customer from '../Asset/customer.png'
import deliver from '../Asset/deliver.png'
import feedback from '../Asset/feedback.png'

const Summery = () => {
    return (
        <div class=" mt-24 mb-36">
            <h1 className='text-2xl font-bold text-primary text-center'>OUR STATISTICS SO FAR </h1>
            <div className="flex gap-7 px-10 mt-8">
            <div class="card-body bg-secondary w-80  rounded-tl-full rounded-b-full shadow-2xl">
                <h2 class=" flex justify-center "> <img src={flag} alt="" /> </h2>
                <h1 className='text-3xl text-white font-bold text-center'> 27+ </h1>
                <p className='text-white font-bold text-center'> Deliver Country  </p>
            </div>
            <div class="card-body bg-error w-80  rounded-tl-full rounded-b-full shadow-2xl">
                <h2 class=" flex justify-center "> <img src={feedback} alt="" /> </h2>
                <h1 className='text-3xl text-white font-bold text-center'>  5K+ </h1>
                <p className='text-white font-bold text-center'>  Clients Feedback</p>
            </div>
            <div class="card-body bg-accent w-80  rounded-tl-full rounded-b-full shadow-2xl">
                <h2 class=" flex justify-center "> <img src={deliver} alt="" /> </h2>
                <h1 className='text-3xl text-white font-bold text-center'>  24 hr </h1>
                <p className='text-white font-bold text-center'> Delivery Commitment</p>
            </div>
            <div class="card-body bg-neutral w-80  rounded-tl-full rounded-b-full shadow-2xl">
                <h2 class=" flex justify-center "> <img src={handshake} alt="" /> </h2>
                <h1 className='text-3xl text-white font-bold text-center'> 12K+ </h1>
                <p className='text-white font-bold text-center'> Happy Client</p>
            </div>
            <div class="card-body bg-primary w-80  rounded-tl-full rounded-b-full shadow-2xl">
                <h2 class=" flex justify-center "> <img src={customer} alt="" /> </h2>
                <h1 className='text-3xl text-white font-bold text-center'>  7k+ </h1>
                <p className='text-white font-bold text-center'>Client Review</p>
            </div>
            </div>
        </div>
    );
};

export default Summery;