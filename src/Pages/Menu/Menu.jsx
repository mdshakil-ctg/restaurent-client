import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCard from '../Shared/MenuCard/MenuCard';

const Menu = () => {
    const [datas , setDatas ] = useState([]);
    useEffect(() =>{
        fetch('/fromMenu.json')
        .then(res=>res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div className='max-w-screen-lg mx-auto mb-10'>
            <SectionTitle title='from our menu' subTitle='Check it out'></SectionTitle>
            <div className='grid md:grid-cols-2 '>
          {
            datas.map(data => <MenuCard data={data}></MenuCard>)
          }
            </div>
        </div>
    );
};

export default Menu;