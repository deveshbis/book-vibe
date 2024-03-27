import { useEffect, useState } from "react";
import { getFromLocalStorageInfo } from "../Utilities/localStored";


const UseLocalStorageInfo = () => {
    const [localInfo, setLocalInfo] = useState([]);

    useEffect(() => {
        setLocalInfo(getFromLocalStorageInfo());
    }, []);
    return { localInfo };
};

export default UseLocalStorageInfo;