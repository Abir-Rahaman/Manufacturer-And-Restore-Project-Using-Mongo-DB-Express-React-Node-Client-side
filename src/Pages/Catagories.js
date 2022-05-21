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
                    <img src={img} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                    <img src={img1} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                    <img src={img2} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
            <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col items-center justify-center">
                    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div> 
                <div class="drawer-side mt-32 py-24">
                    <label for="my-drawer-2" class="drawer-overlay"></label> 
                    <ul class="menu p-4 h-fit py-6 w-80 bg-base-100 text-base-content items-center rounded-3xl ">
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