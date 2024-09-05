import React from 'react';
import ShowCaseCard from '../../Shared/ShowCaseCard/ShowCaseCard';
import imgurl from '../../../assets/home/banner.jpg'

const MenuBanner = () => {
    return (
        <div>
        <ShowCaseCard details='WHOULD YOU LIKE TO TRY A DISH?' name={"OUR MENU"} imgUrl={imgurl}></ShowCaseCard>
        </div>
    );
};

export default MenuBanner;