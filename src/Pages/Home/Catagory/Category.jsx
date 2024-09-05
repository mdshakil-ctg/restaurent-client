import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import OnlineMenu from './OnlineMenu';

const Category = () => {
    return (
        <section className='mb-10 max-w-screen-lg mx-auto'>
            <SectionTitle title='order online' subTitle='From 11.00am to 10.00pm'></SectionTitle>
            <OnlineMenu></OnlineMenu>
        </section>
    );
};

export default Category;