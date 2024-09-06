import { useEffect, useState } from "react";

export const UseCardDataApi = (api) =>{
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/${api}`)
          .then((res) => res.json())
          .then((data) => setDatas(data));
        }, [api])
        return datas;
}