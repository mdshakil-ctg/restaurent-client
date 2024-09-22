import { useCardDataApi } from "./CardDataApi/useCardDataApi";

  export  const useMenuFilterData = (category) =>{
        const api = 'menu';
        const datas = useCardDataApi(api);
        if(!category){
          return datas
        }
        const filterData = datas.filter(data => data.category === `${category}`);
         return filterData;
    }