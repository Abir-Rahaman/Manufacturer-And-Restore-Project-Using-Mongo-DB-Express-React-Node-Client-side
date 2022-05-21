import React from 'react';
import banner from '../Asset/banner.png'
import bg from '../Asset/bg.png'

const Banner = () => {
    return (
        <section  style={{
            background: `url(${bg})`,
            backgroundRepeat:'no-repeat'
        }}    className=" py-56">
        <div class="hero mt-20">
        <div class="hero-content flex-col lg:flex-row-reverse mx-auto  ">
            <div className="w-full">
            <img className=''  src={banner} alt='banner' />
            </div>
            <div className='w-full lg:mr-28'>
            <h4 className='text-xl font-bold text-primary text-center my-5'>CREATING A FEATURE NOW!</h4>
            <h1 class="text-5xl font-bold ">Choose Best Accessories. </h1>
            <p class="py-6 text-center text-primary font-bold">The combination of low prices on media and weak competition gives companies.</p>
            <button class="btn btn-primary text-white lg:ml-56"> Shop Now </button>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Banner;