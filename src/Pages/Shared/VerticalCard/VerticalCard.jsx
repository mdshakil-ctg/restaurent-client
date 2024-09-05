import React from "react";

const VerticalCard = ({data}) => {
    const {name, image, details} = data;
  return (
    <div className="card glass">
      <figure>
        <img
          src={image}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-center">
          <button className="border-b-2 rounded py-2 px-3 border-[#BB8506] text-[#BB8506] hover:bg-black">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default VerticalCard;
