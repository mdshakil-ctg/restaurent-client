import { useState } from "react";
import ShopCard from "./../components/ShopCard";
import { useParams } from "react-router-dom";

const ShopTabData = ({ datas }) => {
    console.log({datas})
    const params = useParams();
    console.log({params})
  const count = parseInt(datas.length);
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(count / itemsPerPage);
  console.log({currentPage})

  const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = datas.slice(indexOfFirstItem, indexOfLastItem);

const pages = [];

for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
}

//   const pages = [...Array(totalPages).keys()];

  const handleNextOption = () => {
    console.log('hitting')
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevOption = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {currentItems.map((data) => (
          <ShopCard key={data._id} data={data}></ShopCard>
        ))}
      </div>
      <div className="flex justify-start items-center space-x-4 mt-16">
        <button className="btn" onClick={handlePrevOption}>Prev</button>
        {pages.map((page) => (
          <li
          key={page}
            className={`w-16 h-8 flex justify-center items-center font-semibold rounded-full cursor-pointer transition ease-linear text-white list-none ${currentPage == page ? 'bg-[#FF4081]' : 'bg-black '}`}
            onClick={()=>{setCurrentPage(page)}}
          >
            {page}
          </li>
        ))}
        <button className="btn" onClick={handleNextOption}>Next</button>
      </div>
    </div>
  );
};

export default ShopTabData;