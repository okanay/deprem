import { useEffect, useState } from "react";
import { StartDummyDataDestek, StartDummyDataTalep } from "../../helper/DummyData";

const useGetDummyData = (type, id) => {

  const [isLoading , setLoading ] = useState(true)
  const [error , setError ] = useState({status : false, message : ""})
  const [data , setData ] = useState('')

  const getData = () => {

    setLoading(true)
    let response = undefined;


    if (type === "destek")
    {
      response = StartDummyDataDestek.find((item) => {
        if (item.id === id) {
          return item;
        }
      });
    }
    else if (type === "talep")
    {
      response = StartDummyDataTalep.find((item) => {
        if (item.id === id) {
          return item;
        }
      });
    }

    if (response !== undefined)
    {
      setError({status : false, message : ""})
      setLoading(false)
      setData(response);
    }
    else
    {
      setLoading(false)
      setError({status : true, message : "Data bulunamadi."})
    }
  };


  useEffect(() => {
    getData();
  }, [type]);
  return [data, isLoading, error,];
};

export default useGetDummyData;
