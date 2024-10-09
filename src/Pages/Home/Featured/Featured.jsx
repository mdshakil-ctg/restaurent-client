
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImd from '../../../assets/home/banner.jpg'
import './Featured.css'
import Button from "../../Shared/Button/Button";
const Featured = () => {
  return (
    <div className="mb-10 p-8 bg-fixed featured-bg flex flex-col h-screen items-center text-white">
    <div className="z-10 mb-10 w-full">
      <SectionTitle
        title="from our menu"
        subTitle="Check it out"
      ></SectionTitle>
    </div>
    <div className="z-10 md:p-16">
      <div className="flex items-center md:gap-4">
        <div>
          <img className="rounded-xl hidden md:flex" src={featuredImd} alt="Featured Image" />
        </div>
        <div className=" p-12 space-y-2">
          <span className="font-semibold text-xs">Septembar 20, 2024</span>
          <h5 className="text-3xl font-satisfy">WHERE ARE YOU GET DRINKS?</h5>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="flex"><Button info={'Read More'}></Button></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
