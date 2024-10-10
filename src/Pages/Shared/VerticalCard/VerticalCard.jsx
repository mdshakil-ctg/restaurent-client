import { useEffect } from "react";
import "./VerticalCard.css"; 


const VerticalCard = ({ data, setMenuTitle }) => {
  const { name, image, details, recipe, price, category } = data;
  useEffect( () =>{
    if(setMenuTitle){
      setMenuTitle(category)
    }
  },[setMenuTitle,category])
  return (
    <div className={`shadow-xl rounded-lg vertical-bg text-gray-300  transition-transform duration-300 transform hover:scale-105 h-[400px] p-5`}>
      <div className="h-1/2  pt-12 space-y-2">
      <div>
      <h2 className="text-2xl font-semibold text-orange-300 ">{name}</h2>
      <p>{price ? '$' + (price) : ""}</p>
      </div>
      <p className="mb-4 text-xs text-[#83827E]">{details ? details : recipe} lorem ipsum dollar set imit with rastaurent...</p>
      </div>
      <div className="flex h-1/2">
        <div className="text-xs w-1/2 pl-3 pr-2 space-y-5">
          <p >Restaurant 1 <br />234 Long Street</p>
          <p >Restaurant 2 <br />280 Ziraca Park</p>
          <p className="text-xs ">* Terms and condition apply</p>
        </div>
        <div className="w-1/2">
        <img
          className="w-full h-[150px] border-4 border-white rounded-tl-[50px] rounded-br-[50px] object-cover"
          src={image}
          alt="menu image!"
        />
        </div>
      </div>
      
    </div>
  );
};

export default VerticalCard;
