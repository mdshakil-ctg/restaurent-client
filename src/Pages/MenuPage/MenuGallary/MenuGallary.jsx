import React from 'react';
import { UseCardDataApi } from '../../../Hooks/CardDataApi/UseCardDataApi';
import ShowCaseCard from '../../Shared/ShowCaseCard/ShowCaseCard';
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import drinks from '../../../assets/menu/menu-bg.png'
import MenuCards from '../../Shared/MenuCards/MenuCards';

const MenuGallary = () => {
    const datas = UseCardDataApi('menu.json')
    const dessertsData = datas.filter(data => data.category ==='dessert');
    const pizzasData = datas.filter(data => data.category ==='pizza');
    const saladsData = datas.filter(data => data.category ==='salad');
    const soupsData = datas.filter(data => data.category ==='soup');
    const drinksData = datas.filter(data => data.category ==='drinks');

    console.log(dessertsData)
    return (
        <div>
            {/* dessert section */}
            <ShowCaseCard imgUrl={dessert} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"DESSERTS"} ></ShowCaseCard>
            <MenuCards datas={dessertsData.slice(0,6)} buttonInfo='order your favourite food'></MenuCards>

            {/* pizza section */}
            <ShowCaseCard imgUrl={pizza} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"PIZZA"} ></ShowCaseCard>
            <MenuCards datas={pizzasData.slice(0,9)} buttonInfo='order your favourite food'></MenuCards>

            {/* salad section */}
            <ShowCaseCard imgUrl={salad} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"SALAD"} ></ShowCaseCard>
            <MenuCards datas={saladsData.slice(0,8)} buttonInfo='order your favourite food'></MenuCards>

            {/* soup section */}
            <ShowCaseCard imgUrl={soup} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"SOUP"} ></ShowCaseCard>
            <MenuCards datas={soupsData.slice(0,6)} buttonInfo='order your favourite food'></MenuCards>

            {/* drinks section */}
            <ShowCaseCard imgUrl={drinks} details={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'} name={"DRINKS"} ></ShowCaseCard>
            <MenuCards datas={drinksData.slice(0,9)} buttonInfo='order your favourite food'></MenuCards>
        </div>
    );
};

export default MenuGallary;