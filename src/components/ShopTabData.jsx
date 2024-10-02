import { useState } from "react";
import ShopCard from "./../components/ShopCard";
import MenuCartSkeleton from "./Skeleton/MenuCartSkeleton";
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

const ShopTabData = ({ datas, isLoading }) => {
  const count = parseInt(datas.length);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(count / itemsPerPage);


  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

const pages = [];

for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
}



  const handleNextOption = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevOption = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  if(!datas){
    return <p>There is no data avilable now!</p>
  }

  if(isLoading){
    return(
      <div className="grid md:grid-cols-3 gap-10">
       <MenuCartSkeleton></MenuCartSkeleton>
       <MenuCartSkeleton></MenuCartSkeleton>
       <MenuCartSkeleton></MenuCartSkeleton>
       <MenuCartSkeleton></MenuCartSkeleton>
       <MenuCartSkeleton></MenuCartSkeleton>
       <MenuCartSkeleton></MenuCartSkeleton>
      </div>
    )
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-10">
        {currentItems.map((data) => (
          <ShopCard key={data._id} data={data}></ShopCard>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-5 mt-16">
        <button className="text-2xl" onClick={handlePrevOption}><MdOutlineArrowBackIosNew /></button>
        {pages.map((page) => (
          <li
          key={page}
            className={`w-6 h-6 flex justify-center items-center font-semibold rounded text-sm cursor-pointer transition ease-linear text-white list-none ${currentPage == page ? 'bg-green-600' : 'bg-slate-800 '}`}
            onClick={()=>{setCurrentPage(page)}}
          >
            {page}
          </li>
        ))}
        <button className="text-xl  " onClick={handleNextOption}><MdOutlineArrowForwardIos  /></button>
      </div>
    </div>
  );
};

export default ShopTabData;
