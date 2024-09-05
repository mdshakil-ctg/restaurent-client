import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import { UseCardDataApi } from '../../../Hooks/CardDataApi/UseCardDataApi';
import VerticalCard from '../../Shared/VerticalCard/VerticalCard';

const ChefRecommend = () => {
    const datas = UseCardDataApi('/fromMenu.json');
    return (
        <section className='mb-20'>
            <SectionTitle title={'chef recommends'} subTitle={'Should Try'}></SectionTitle>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    datas.map(data => <VerticalCard key={data.id} data = {data}></VerticalCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommend;