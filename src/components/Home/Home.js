import React from 'react';
import Banner from '../../Pages/Banner';
import Catagories from '../../Pages/Catagories';
import Customer from '../../Pages/Customer';
import Summery from '../../Pages/Summery';
import ComputerTools from '../ComputerTools/ComputerTools';
import Review from './../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ComputerTools></ComputerTools>
            <Catagories></Catagories>
            <Customer></Customer>
            <Summery></Summery>
            <Review></Review>
        </div>
    );
};

export default Home;