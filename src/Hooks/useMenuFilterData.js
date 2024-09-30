import { useCardDataApi } from "./CardDataApi/useCardDataApi";

  export  const useMenuFilterData = (category) =>{
        const api = 'menu';
        const {datas, isLoading} = useCardDataApi(api);
        if(!category){
          return {datas, isLoading}
        }
        const filterData = datas.filter(data => data.category === `${category}`);
         return {filterData, isLoading};
    }