import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import Button from '../Button/Button';

const MenuCards = ({datas, buttonInfo='see details'}) => {
    return (
        <div className="max-w-screen-lg mx-auto mb-10">
        <div className="grid md:grid-cols-2 ">
          {datas.map((data) => (
            <MenuCard key={data.id} data={data}></MenuCard>
          ))}
        </div>
        <div className="text-center">
          <Button info={buttonInfo}></Button>
        </div>
      </div>
    );
};

export default MenuCards;