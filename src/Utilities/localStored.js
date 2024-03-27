import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("read") || "[]");

    const existedData = saveData.find((item) => item.bookId === parseInt(data.bookId));

    if (existedData === undefined) {
        saveData.push(data);
        localStorage.setItem("read", JSON.stringify(saveData));
        toast.success("Added Successfully");
    } else {
        toast.warning("Already Added");
    }
};



export const getFromLocalStorage =() =>{
    const data = JSON.parse(localStorage.getItem("read") || "[]");
    return data;
}




export const saveToLocalStorageInfo = (info) => {
    const saveData2 = JSON.parse(localStorage.getItem("wish") || "[]");
 
    const existedData = saveData2.find((items) => items.bookId === parseInt(info.bookId));

    if (existedData === undefined) {
        saveData2.push(info);
        localStorage.setItem("wish", JSON.stringify(saveData2));
        toast.success("Added Successfully");
    } else {
        toast.warning("Already Added");
    }
};


export const getFromLocalStorageInfo =() =>{
    const info = JSON.parse(localStorage.getItem("wish"));
    console.log("data", info);
    return info;
}