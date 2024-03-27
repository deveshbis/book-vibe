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