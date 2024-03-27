export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("read") || "[]");

    const existedData = saveData.find((item) => item.bookId === parseInt(data.bookId));

    if (existedData === undefined) {
        saveData.push(data);
        localStorage.setItem("read", JSON.stringify(saveData));
        alert("Added Successfully");
    } else {
        alert("Already Added");
    }
};



export const getFromLocalStorage =() =>{
    const data = JSON.parse(localStorage.getItem("read") || "[]");
    console.log("local:", data);
    return data;
}