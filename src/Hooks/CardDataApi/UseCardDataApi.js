import { useEffect, useState } from "react";

export const UseCardDataApi = (url) =>{
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => setDatas(data));
      }, [])
      return datas;
}