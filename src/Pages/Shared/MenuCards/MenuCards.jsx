import { useState } from "react";
import MenuCard from "../MenuCard/MenuCard";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "../../../components/Skeleton/Skeleton";
import ButtonSkeleton from "../../../components/Skeleton/ButtonSkeleton";

const MenuCards = ({ datas, buttonInfo = "see details", isLoading }) => {
  console.log("in the menu cards ", { isLoading });

  const [menuTitle, setMenuTitle] = useState("");

  if (isLoading) {
    return (
      <>
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto mb-10">
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      <Skeleton></Skeleton>
      </div>
      <ButtonSkeleton></ButtonSkeleton>
      </>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto mb-10">
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {datas.map((data) => (
          <MenuCard
            key={data._id}
            data={data}
            setMenuTitle={setMenuTitle}
            isLoading={isLoading}
          ></MenuCard>
        ))}
      </div>
      <div className="text-center">
        <Link to={`/shop/${menuTitle ? menuTitle : "soup"}`}>
          <Button info={buttonInfo}></Button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCards;
