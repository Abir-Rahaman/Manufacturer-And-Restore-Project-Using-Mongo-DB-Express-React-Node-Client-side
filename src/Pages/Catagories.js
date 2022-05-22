import React from 'react';
import img from '../Asset/one.png'
import img1 from '../Asset/two.png'
import img2 from '../Asset/three.png'

const Catagories = () => {
    return (
        <div class="hero bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse ">
        <div style={{ height:'550px' }} class="carousel rounded-2xl">
                <div id="slide1" class="carousel-item relative w-full ">
                    <img src={img} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={img1} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={img2} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src={img} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide5" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" class="carousel-item relative w-full">
                    <img src={img2} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a> 
                    <a href="#slide6" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" class="carousel-item relative w-full">
                    <img src={img} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" class="btn btn-circle">❮</a> 
                    <a href="#slide7" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide7" class="carousel-item relative w-full">
                    <img src={img1} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide7" class="btn btn-circle">❮</a> 
                    <a href="#slide8" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide8" class="carousel-item relative w-full">
                    <img src={img} class="w-96 h-80 mx-auto mt-24" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide8" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
            <div>
            <div class="drawer drawer-mobile"> 
                <div class="lg:mt-32">
                    <ul class="menu p-4 h-fit py-6 w-80 bg-base-100 items-center rounded-3xl ">
                    <li className='bg-primary '><a>Catagories</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    </ul>
                
                </div>
                </div>
            </div>
        </div>
</div>
    );
};

export default Catagories;