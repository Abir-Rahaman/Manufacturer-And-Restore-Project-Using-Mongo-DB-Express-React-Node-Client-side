import React from 'react';
import banner from '../Asset/banner.png'
import bg from '../Asset/bg.png'

const Banner = () => {
    return (
        <section  style={{
            background: `url(${bg})`,
            backgroundRepeat:'no-repeat'
        }}    className=" pb-20">
        <div class="hero mt-20">
        <div class="hero-content flex-col lg:flex-row-reverse mx-auto  ">
            <div className='md:w-w-48 lg:w-48rem'>
            <img className=''src={banner} alt='banner' />
            </div>
            <div  className=' lg:mr-28'>
            <h4 className='text-xl font-bold text-primary text-center my-5'>CREATING A FEATURE NOW!</h4>
            <h1 class="text-5xl font-bold text-center ">Choose Accessories. </h1>
            <p class="py-6 text-center text-primary font-bold">The combination of low prices on media and weak competition gives companies.</p>
            <button class="btn btn-primary text-white lg:ml-48"> Shop Now </button>
            </div>
        </div>
        </div>
        </section>
    );
};

export default Banner;