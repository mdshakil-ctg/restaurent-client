import { useEffect } from "react";

const MenuCard = ({data, setMenuTitle}) => {
    const {name, recipe, price, image, category} = data;
    // setMenuTitle && setMenuTitle(category);
    useEffect( () =>{
      if(setMenuTitle){
        setMenuTitle(category)
      }
    },[setMenuTitle,category])
    
  return (
    <div className="flex items-center shadow-xl rounded-lg bg-black bg-opacity-90 text-white px-2 transition-transform duration-300 transform hover:scale-105 glass h-[140px]">
      <figure className="flex-shrink-0">
        <img
        className="w-[80px] h-[65px] lg:w-[118px] lg:h-[104px] bg-[#D9D9D9] border-2 rounded-full rounded-tl-none "
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body p-0 pl-2 md:p-2 lg:p-8 flex flex-row  overflow-hidden">
        <div className="flex-shrink">
        <h2 className="font-semibold mb-1">{name} {">"}{">"}{">"}</h2>
        <p className="text-xs text-white opacity-50">{recipe?.slice(0,80)}...</p>
        </div>
        <div className="ml-auto">
          <div className="text-white font-semibold p-1 bg-black rounded-lg  text-xs lg:glass">${Number(price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
