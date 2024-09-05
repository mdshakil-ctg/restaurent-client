import React from "react";

const MenuCard = ({data}) => {
    const {name, details, price} = data;
  return (
    <div className="flex items-center">
      <figure className="flex-shrink-0">
        <img
        className="w-[118px] h-[104px] bg-[#D9D9D9] border-2 rounded-full rounded-tl-none "
          src=""
          alt=""
        />
      </figure>
      <div className="card-body flex flex-row">
        <div>
        <h2 className="card-title">{name}-----------</h2>
        <p>{details.slice(0,80)}...</p>
        </div>
        <div className="ml-auto">
          <div className="text-[#BB8506]">${price}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
