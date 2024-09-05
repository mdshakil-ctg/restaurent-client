import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Button from "../../Shared/Button/Button";
import featuredImd from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
  return (
    <div className="mb-10 p-8 bg-fixed featured-bg flex flex-col items-center text-white">
    <div className="z-10 p-16">
    <SectionTitle
        title="from our menu"
        subTitle="Check it out"
      ></SectionTitle>
      <div className="flex items-center gap-4">
        <div>
          <img src={featuredImd} alt="Featured Image" />
        </div>
        <div className=" p-12 space-y-2">
          <span>March 20, 2023</span>
          <h5>WHERE CAN I GET SOME?</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="border-b-2 rounded px-3 py-2 font-semibold hover:bg-[#bb8506da]">READ MORE</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
