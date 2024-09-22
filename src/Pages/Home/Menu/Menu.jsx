import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import Button from "../../Shared/Button/Button";

import { Link } from "react-router-dom";
import { useCardDataApi } from "../../../Hooks/CardDataApi/useCardDataApi";


const Menu = () => {
  
const datas = useCardDataApi('category');


  return (
    <div className="max-w-screen-lg mx-auto mb-10">
      <SectionTitle
        title="from our menu"
        subTitle="Check it out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 ">
        {datas.slice(0,6).map((data) => (
          <MenuCard key={data._id} data={data}></MenuCard>
        ))}
      </div>
      <div className="text-center">
        <Link to='/shop/soup'><Button info={"View full menu"}></Button></Link>
      </div>
    </div>
  );
};

export default Menu;
