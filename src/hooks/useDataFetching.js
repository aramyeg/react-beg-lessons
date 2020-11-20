import {useEffect, useState} from 'react';
import axios from 'axios';


export const useDataFetching = (url="", startData, formatter) => {

  const [data, setData] = useState(startData);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = await response.data;
      const formattedData = formatter ? formatter(data) : data;

      if(formattedData) setData(formattedData);

    }
    catch (e) {
      setError(e.message);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchData();
  }, [url]);

  return {data, error, loading};

};
