import React, { useState, createContext, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import formatedDate from '../utils/formatDate';

export const MeterContext = createContext<MeterContext>({} as MeterContext);

export const MeterProvider = ({ children }: MeterProvider) => {
  
  const meter: Array<string> = ["electricity", "gas"];
  const [activeMeter, setActiveMeterType] = useState<ActiveMeter>({ id: "2", type: "electricity" });
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [meterYears, setMetersYear] = useState<Array<any>>([]);
  const [metersData, setMetersData] = useState<Array<any>>([]);

  const { data, isLoading, isError } = useFetch(`https://5e9ed3cdfb467500166c47bb.mockapi.io/api/v1/meter/${activeMeter.id}/${activeMeter.type}`);

  // Linked to the year selection input, Launch data fetching according the option value
  const handleYearFiltering = (filter: string) => { setActiveFilter(filter) };
  
  // Function linked to the toggle buttons to switch between meters  
  const toggleMeterType = () => {
    setActiveMeterType(activeMeter.type === "electricity" ? {id: "1", type: "gas"} : {id: "2", type: "electricity"});
  };
 
  useEffect(() => {
    
    const { formatedDateArray, yearsArray } = formatedDate(data);
    
    const filterByDate = (arr: any[]) => {
      activeFilter === "all" ? setMetersData(arr) : setMetersData(arr.filter((year: (any)) => year.createdAt.includes(activeFilter)));
    }

    filterByDate(formatedDateArray);
    setMetersYear(yearsArray);

  }, [data, isLoading, activeFilter])
   
  return (
    <MeterContext.Provider value={{
      activeMeter,
      activeFilter,
      handleYearFiltering,
      isLoading,
      isError,
      meter,  
      metersData,
      meterYears,
      setActiveFilter,
      toggleMeterType,
    }}>
      {children}
    </MeterContext.Provider>
    );
};