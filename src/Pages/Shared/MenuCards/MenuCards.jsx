import { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const MenuCards = ({datas, buttonInfo='see details'}) => {

  const [menuTitle, setMenuTitle] = useState('');
console.log(menuTitle)
    return (
        <div className="max-w-screen-lg mx-auto mb-10">
        <div className="grid md:grid-cols-2 ">
          {datas.map((data) => 
            <MenuCard key={data._id} data={data} setMenuTitle={setMenuTitle}></MenuCard>
          )}
        </div>
        <div className="text-center">
          <Link to={`/shop/${menuTitle}`}><Button info={buttonInfo} ></Button></Link>
        </div>
      </div>
    );
};

export default MenuCards;