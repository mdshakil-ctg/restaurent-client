import { useEffect } from "react";

const MenuCard = ({data, setMenuTitle, isLoading}) => {
    const {name, recipe, price, image, category} = data;
    // setMenuTitle && setMenuTitle(category);
    useEffect( () =>{
      if(setMenuTitle){
        setMenuTitle(category)
      }
    },[setMenuTitle,category])

    console.log('isloading in the menucart', isLoading);

    
  return (
    <div className="flex items-center">
      <figure className="flex-shrink-0">
        <img
        className="w-[118px] h-[104px] bg-[#D9D9D9] border-2 rounded-full rounded-tl-none "
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body flex flex-row">
        <div className="flex-shrink">
        <h2 className="font-semibold text-xl">{name} {">"}{">"}{">"}</h2>
        <p>{recipe?.slice(0,80)}...</p>
        </div>
        <div className="ml-auto">
          <div className="text-white font-semibold p-1 bg-black rounded-lg text-xs">${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
