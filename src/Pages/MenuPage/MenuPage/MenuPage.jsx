import React from 'react';
import MenuBanner from '../MenuBanner/MenuBanner';
import OfferMenu from '../OfferMenu/OfferMenu';
import MenuGallary from '../MenuGallary/MenuGallary';

const MenuPage = () => {
    return (
        <div>
            <MenuBanner></MenuBanner>
            <OfferMenu></OfferMenu>
            <MenuGallary></MenuGallary>
            
        </div>
    );
};

export default MenuPage;