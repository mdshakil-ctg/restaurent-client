import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import Button from "../../Shared/Button/Button";
import { UseCardDataApi } from "../../../Hooks/CardDataApi/UseCardDataApi";


const Menu = () => {
  
const datas = UseCardDataApi('category');

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
        <Button info={"View full menu"}></Button>
      </div>
    </div>
  );
};

export default Menu;
