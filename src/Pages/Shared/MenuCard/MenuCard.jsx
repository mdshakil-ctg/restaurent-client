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
    <div className="flex items-center border shadow-xl rounded-lg bg-transparent px-2 transition-transform duration-300 transform hover:scale-105 glass">
      <figure className="flex-shrink-0">
        <img
        className="w-[118px] h-[104px] bg-[#D9D9D9] border-2 rounded-full rounded-tl-none "
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body flex flex-row">
        <div className="flex-shrink">
        <h2 className="font-semibold">{name} {">"}{">"}{">"}</h2>
        <p className="text-xs text-slate-500">{recipe?.slice(0,80)}...</p>
        </div>
        <div className="ml-auto">
          <div className="text-white font-semibold p-1 bg-black rounded-lg  text-xs glass">${Number(price).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
