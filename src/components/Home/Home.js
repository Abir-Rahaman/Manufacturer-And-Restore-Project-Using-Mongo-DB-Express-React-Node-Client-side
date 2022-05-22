import React from 'react';
import Banner from '../../Pages/Banner';
import Catagories from '../../Pages/Catagories';
import Customer from '../../Pages/Customer';
import Summery from '../../Pages/Summery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagories></Catagories>
            <Customer></Customer>
            <Summery></Summery>
        </div>
    );
};

export default Home;