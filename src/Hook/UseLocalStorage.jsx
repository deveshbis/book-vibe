import { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utilities/localStored';

const UseLocalStorage = () => {
    const [localData, setLocalData] = useState();
    

    useEffect(()=> {
        setLocalData(getFromLocalStorage())
    }, [])
    return { localData }
};
export default UseLocalStorage;