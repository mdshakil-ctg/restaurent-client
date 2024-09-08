import ShowCaseCard from "../../Shared/ShowCaseCard/ShowCaseCard";
import shopBanner from "../../../assets/shop/banner2.jpg";
import { useMenuFilterData } from "../../../Hooks/useMenuFilterData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import ShopTabData from "../../../components/ShopTabData";
// import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";

const Shop = () => {

  const [activeTabs, setActiveTabs] = useState(null);

  console.log(activeTabs)



  const params = useParams()
  const items = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const initialIndex = items.indexOf(params.category)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const saladsData = useMenuFilterData("salad");
  const pizzasData = useMenuFilterData("pizza");
  const soupsData = useMenuFilterData("soup");
  const dessertsData = useMenuFilterData("dessert");
  const drinksData = useMenuFilterData("drinks");

  return (
    <div className="mb-20">
      <ShowCaseCard
        imgUrl={shopBanner}
        details="WOULD YOU LIKE TO TRY A DISH?"
        name={"OUR SHOP"}
      ></ShowCaseCard>
      <div className="md:max-w-[80%] mx-auto">
        <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList 
          className='flex flex-row justify-center items-center bg-[#2B2A28] border-b-[12px] border-b-[#EB4E01] text-white font-semibold text-xl mb-16 '
          onClick={(e) => setActiveTabs(e.target.innerHTML)}>
            <Tab className={`${activeTabs == 'SALAD' ? 'bg-[#EB4E01] outline-none' : 'bg-[#2B2A28]'}  py-10 px-6 transition duration-500 ease-out cursor-pointer`}>SALAD</Tab>
            <Tab className={`${activeTabs == 'PIZZA' ? 'bg-[#EB4E01] outline-none' : 'bg-[#2B2A28]'} py-10 px-6  transition duration-500 ease-out cursor-pointer`}>PIZZA</Tab>
            <Tab className={`${activeTabs == 'SOUPS' ? 'bg-[#EB4E01] outline-none' : 'bg-[#2B2A28]'} py-10 px-6 transition duration-500 ease-out cursor-pointer`}>SOUPS</Tab>
            <Tab className={`${activeTabs == 'DESSERT' ? 'bg-[#EB4E01] outline-none' : 'bg-[#2B2A28]'} py-10 px-6 transition duration-500 ease-out cursor-pointer`}>DESSERT</Tab>
            <Tab className={`${activeTabs == 'DRINKS' ? 'bg-[#EB4E01] outline-none' : 'bg-[#2B2A28]'} py-10 px-6 transition duration-500 ease-out cursor-pointer`}>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <ShopTabData datas={saladsData}></ShopTabData>
          </TabPanel>
          <TabPanel>
            <ShopTabData datas={pizzasData}></ShopTabData>
          </TabPanel>
          <TabPanel>
            <ShopTabData datas={soupsData}></ShopTabData>
          </TabPanel>
          <TabPanel>
            <ShopTabData datas={dessertsData}></ShopTabData>
          </TabPanel>
          <TabPanel>
            <ShopTabData datas={drinksData}></ShopTabData>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
