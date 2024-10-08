import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import Button from "../../Shared/Button/Button";

import { Link } from "react-router-dom";
import { useCardDataApi } from "../../../Hooks/CardDataApi/useCardDataApi";
import Skeleton from "../../../components/Skeleton/Skeleton";

const Menu = () => {
  const { datas, isLoading } = useCardDataApi("category");

  return (
    <div className="p-6 md:p-10 lg:p-20 xl:p-24">
      <SectionTitle
        title="from our menu"
        subTitle="Check it out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-8 md:mb-12">
        {isLoading ? (
          <>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
            <Skeleton></Skeleton>
          </>
        ) : (
          datas
            .slice(0, 6)
            .map((data) => <MenuCard key={data._id} data={data}></MenuCard>)
        )}
      </div>
      <div className="text-center">
        <Link to="/shop/soup">
          <Button info={"View full menu"}></Button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
