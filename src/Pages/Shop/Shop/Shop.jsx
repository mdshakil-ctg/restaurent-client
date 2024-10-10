import { MdManageSearch } from "react-icons/md";
import shopBanner from "../../../assets/shop/banner2.jpg";
import { useMenuFilterData } from "../../../Hooks/useMenuFilterData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import ShopTabData from "../../../components/ShopTabData";
import { useParams } from "react-router-dom";
import SetTitle from "../../../components/SetTitle";

const Shop = () => {
  // const [serchText, setSerchText] = useState('')
  const [searchData, setSearchData] = useState([]);
  const [message, setMessage] = useState([]);

  const params = useParams();
  const [activeTabs, setActiveTabs] = useState(params.category);

  const items = ["salad", "pizza", "soup", "dessert", "drinks", "all"];
  const initialIndex = items.indexOf(params.category);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const saladsData = useMenuFilterData("salad");
  const pizzasData = useMenuFilterData("pizza");
  const soupsData = useMenuFilterData("soup");
  const dessertsData = useMenuFilterData("dessert");
  const drinksData = useMenuFilterData("drinks");
  const allData = useMenuFilterData();
  // console.log({allData}, {searchData}, {serchText});

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("hitting", event.target.search.value);
    const searchText = event.target.search.value.trim();
    const searchResult = allData?.datas?.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log({ searchResult });
    if (!searchResult.length) {
      console.log("if hitting");
      setMessage("There is no data match for your query!");
    } else {
      console.log("else hitting");
      setActiveTabs("all");
      setSearchData(searchResult);
      setTabIndex(items.indexOf("all"));
      setMessage("");
    }
  };

  return (
    <div className="mb-20 pt-16">
      <SetTitle title={"Shop"}></SetTitle>
      <div className="mb-10 md:mb-20">
        <img src={shopBanner} alt="" />
      </div>
      <div className="flex justify-end mx-auto mb-10 md:mb-20 px-8 md:px-20 lg:px-32">
        <div className="w-full mx-auto md:w-2/3 md:mx-auto  lg:w-1/2 lg:mx-0">
          <form onSubmit={handleSearch} className="w-full relative">
            {/* search bar content */}
            <input
              // onBlurCapture={(e)=>setSerchText(e.target.value)}
              name="search"
              className="border-2 border-slate-600 placeholder-black placeholder:text-sm placeholder:font-satisfy font-semibold focus:outline-none"
              type="text"
              placeholder="Search your favourite food"
            />
            <button
              type="submit"
              className="btn btn-ghost rounded-none
           text-4xl mt-6 absolute right-0 bottom-0"
            >
              {" "}
              <MdManageSearch />
            </button>
          </form>
          {message && <p className="text-red-600">{message}</p>}
        </div>
      </div>
      <div className=" md:p-0 md:max-w-[80%] mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            className="w-full flex flex-row justify-center items-center bg-[#2B2A28] border-b-[12px] border-b-[#EB4E01] text-white font-semibold text-[10px] md:text-xl mb-16"
            onClick={(e) => {
              setActiveTabs(e.target.innerHTML);
            }}
          >
            <Tab
              className={`${
                activeTabs == "salad"
                  ? "bg-[#EB4E01] outline-none text-black"
                  : "bg-[#2B2A28]"
              } px-2 py-4 md:py-10 md:px-5  transition duration-500 ease-out cursor-pointer uppercase`}
            >
              salad
            </Tab>
            <Tab
              className={`${
                activeTabs == "pizza"
                  ? "bg-[#EB4E01] outline-none text-black"
                  : "bg-[#2B2A28]"
              } px-2 py-4 md:py-10 md:px-5 transition duration-500 ease-out cursor-pointer uppercase`}
            >
              pizza
            </Tab>
            <Tab
              className={`${
                activeTabs == "soup"
                  ? "bg-[#EB4E01] outline-none text-black"
                  : "bg-[#2B2A28]"
              } px-2 py-4 md:py-10 md:px-5  transition duration-500 ease-out cursor-pointer uppercase`}
            >
              soup
            </Tab>
            <Tab
              className={`${
                activeTabs == "dessert"
                  ? "bg-[#EB4E01] outline-none text-black"
                  : "bg-[#2B2A28]"
              } px-2 py-4 md:py-10 md:px-5  transition duration-500 ease-out cursor-pointer uppercase`}
            >
              dessert
            </Tab>
            <Tab
              className={`${
                activeTabs == "drinks"
                  ? "bg-[#EB4E01] outline-none text-black"
                  : "bg-[#2B2A28]"
              } px-2 py-4 md:py-10 md:px-5  transition duration-500 ease-out cursor-pointer uppercase`}
            >
              drinks
            </Tab>
            <Tab
              className={`${
                activeTabs == "all"
                  ? "bg-[#EB4E01] outline-none text-black"
                  : "bg-[#2B2A28]"
              } px-3 py-4 md:py-10 md:px-5  transition duration-500 ease-out cursor-pointer uppercase`}
            >
              all
            </Tab>
          </TabList>
          <TabPanel className='px-8 md:px-0'>
            <ShopTabData
              datas={saladsData.filterData}
              isLoading={saladsData.isLoading}
            ></ShopTabData>
          </TabPanel>
          <TabPanel className='px-8 md:px-0'>
            <ShopTabData
              datas={pizzasData.filterData}
              isLoading={pizzasData.isLoading}
            ></ShopTabData>
          </TabPanel>
          <TabPanel className='px-8 md:px-0'>
            <ShopTabData
              datas={soupsData.filterData}
              isLoading={soupsData.isLoading}
            ></ShopTabData>
          </TabPanel>
          <TabPanel className='px-8 md:px-0'>
            <ShopTabData
              datas={dessertsData.filterData}
              isLoading={dessertsData.isLoading}
            ></ShopTabData>
          </TabPanel>
          <TabPanel className='px-8 md:px-0'>
            <ShopTabData
              datas={drinksData.filterData}
              isLoading={drinksData.isLoading}
            ></ShopTabData>
          </TabPanel>
          <TabPanel className='px-8 md:px-0'>
            <ShopTabData
              datas={searchData.length > 0 ? searchData : allData.datas}
              isLoading={allData.isLoading}
            ></ShopTabData>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
