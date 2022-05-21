import React from 'react';
import Banner from '../../Pages/Banner';
import Catagories from '../../Pages/Catagories';
import Customer from '../../Pages/Customer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Customer></Customer>
        </div>
    );
};

export default Home;