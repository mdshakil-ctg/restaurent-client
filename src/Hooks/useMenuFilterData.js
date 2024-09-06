import { UseCardDataApi } from "./CardDataApi/UseCardDataApi";

  export  const useMenuFilterData = (category) =>{
        const api = 'menu'
        const datas = UseCardDataApi(api);
        const filterData = datas.filter(data => data.category === `${category}`);
         return filterData;
    }