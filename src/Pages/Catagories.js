import React from 'react';
import banner1 from '../Asset/banner1.jpg'
import banner2 from '../Asset/banner2.jpg'
import banner3 from '../Asset/banner3.jpg'
import banner4 from '../Asset/banner4.jpg'
import banner5 from '../Asset/banner5.jpg'
import banner6 from '../Asset/banner6.jpg'

const Catagories = () => {
    return (
        <>
        <h1 className='mt-24 text-center text-4xl font-bold text-primary' > Some Unique & Expensive Products </h1>
        <div class="hero mt-[-150px]">
        <div class="hero-content m-0 p-0 flex-col lg:flex-row-reverse ">     
        <div  class="carousel rounded-2xl">
                <div style={{ height:'450px'}} id="slide1" class="carousel-item relative w-full  ">
                    <img src={banner4} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div style={{ height:'500px'}}  id="slide2" class="carousel-item relative w-full">
                    <img src={banner1} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div style={{ height:'500px'}} id="slide3" class="carousel-item relative w-full">
                    <img src={banner2} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide6" class="btn btn-circle">❮</a> 
                    <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{ height:'500px'}} id="slide4" class="carousel-item relative w-full">
                    <img src={banner3} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide5" class="btn btn-circle">❮</a> 
                    <a href="#slide5" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{ height:'500px'}} id="slide5" class="carousel-item relative w-full">
                    <img src={banner4} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a> 
                    <a href="#slide6" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{ height:'500px'}} id="slide6" class="carousel-item relative w-full">
                    <img src={banner5} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide7" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{ height:'500px'}} id="slide7" class="carousel-item relative w-full">
                    <img src={banner6} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide8" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div style={{ height:'500px'}} id="slide8" class="carousel-item relative w-full">
                    <img src={banner3} class="w-full" alt=''/> 
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide8" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
            <div>
            <div  class="drawer drawer-mobile"> 
                <div class="lg:mt-32">
                    <ul class="menu p-4 h-fit py-6 w-80  mt-24 bg-base-300 items-center rounded-2xl ">
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
</>
    );
};

export default Catagories;