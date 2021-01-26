import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  
  const [data, setdata] = useState<Array<MeterData>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  
  const fetchMeterData = async () => {
  
    setIsError(false);
    setIsLoading(true);

    try {      
      let response = await fetch(url);
      let data = await response.json();
      
      setdata(data);

    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
    
  useEffect(() => {
    fetchMeterData();
  }, [url]);

  return {data, isLoading, isError}
};

export default useFetch;

