import { format, getYear, isValid } from 'date-fns';

export default (array: MeterData[]) => {
    
    // Array variable to feed the year's select filter
    let yearsArray: Array<number> = [];

    // Filter invalid dates then construct the new array of datas
    let formatedDateArray = array.filter((item: MeterData) => {

        return isValid(Date.parse(item.createdAt));

    }).map((item: MeterData) => {

        let timestamp = Date.parse(item.createdAt);
        !yearsArray.includes(getYear(timestamp)) && yearsArray.push(getYear(timestamp));        
        
        return {
            ...item,
            createdAt: format(new Date(Date.parse(item.createdAt)), "MM/dd/yyyy")
        }
    });
    
    return {
        formatedDateArray,
        yearsArray
    };
}
  