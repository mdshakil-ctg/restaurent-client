import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Catagory/Category';
import About from '../About/About';
import Menu from '../../Menu/Menu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <Menu></Menu>
        </div>
    );
};

export default Home;