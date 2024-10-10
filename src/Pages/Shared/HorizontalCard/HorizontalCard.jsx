import { useEffect } from "react";
import "./HorizontalCard.css"

const HorizontalCard = ({data, setMenuTitle}) => {
    const {name, recipe, price, image, category} = data;
    // setMenuTitle && setMenuTitle(category);
    useEffect( () =>{
      if(setMenuTitle){
        setMenuTitle(category)
      }
    },[setMenuTitle,category])
    return (
        <div className={`flex items-center shadow-xl rounded-lg horizontal-bg bg-opacity-90 text-white px-2 transition-transform duration-300 transform hover:scale-105 h-[150px]`}>
      <figure className="flex-shrink-0">
        <img
        className="w-[80px] h-[65px] md:w-[100px] md:h-[80px] lg:w-[118px] lg:h-[104px] bg-[#D9D9D9] md:border-4 md:rounded-tl-[20px] md:rounded-br-[20px] lg:rounded-tl-[40px] lg:rounded-br-[40px]"
          src={image}
          alt=""
        />
      </figure>
      <div className="card-body p-0 pl-2 md:p-2 lg:p-8 flex flex-row  overflow-hidden">
        <div className="flex-shrink">
        <h2 className="font-semibold mb-1">{name}</h2>
        <p className="text-xs text-white opacity-50">{recipe?.slice(0,80)}...</p>
        </div>
        <div className="ml-auto">
          <div className="text-black font-semibold px-2 !bg-orange-400 rounded-lg  text-xs lg:glass">${Number(price).toFixed(2)}</div>
        </div>
      </div>
    </div>
    );
};

export default HorizontalCard;