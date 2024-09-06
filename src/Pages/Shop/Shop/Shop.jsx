import ShowCaseCard from "../../Shared/ShowCaseCard/ShowCaseCard";
import shopBanner from "../../../assets/shop/banner2.jpg";
import { useMenuFilterData } from "../../../Hooks/useMenuFilterData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import ShopTabData from "../../../components/ShopTabData";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";

const Shop = () => {
  const params = useParams()
  const items = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const initialIndex = items.indexOf(params.category)
  console.log(params.category)
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
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
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
