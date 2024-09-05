import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuCards from '../../Shared/MenuCards/MenuCards';
import { UseCardDataApi } from '../../../Hooks/CardDataApi/UseCardDataApi';

const OfferMenu = () => {
    const datas = UseCardDataApi('fromMenu.json')
    return (
        <div>
            <SectionTitle title='todays offer' subTitle="Don't miss"></SectionTitle>
            <MenuCards datas={datas} buttonInfo='Order your favourite food' ></MenuCards>
        </div>
    );
};

export default OfferMenu;