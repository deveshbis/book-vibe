import UseLocalStorage from "../Hook/UseLocalStorage";

const ReadBooksContent = () => {
    const { localData } = UseLocalStorage();

    if (!localData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {localData.map((data) => (
                <div key={data.bookId} className="border border-gray-300 rounded-md p-4 mb-4 mt-5">
                    <div className="flex gap-5">
                        <div className="bg-slate-300 p-16">
                            <img src={data.image} alt="" />
                        </div>
                        <div>
                            <h1 className="text-3xl p-2">{data.bookName}</h1>
                            <h3 className="text-xl p-2">By: {data.author}</h3>
                            <h2 className="text-2xl p-2">Tags:</h2>
                            <div className="flex gap-2 p-2">
                                {data.tags.map((tag, index) => (
                                    <span key={index} className="px-2 py-1 bg-gray-200 rounded-lg text-green-500">{tag}</span>
                                ))}
                            </div>
                            <div className="flex gap-5 p-2">
                                <p className="text-xl p-2">Total Pages: {data.totalPages}</p>
                                <p className="text-xl p-2">Publisher: {data.publisher}</p>
                            </div>
                            <hr className="p-3" />
                            <div className=" flex items-center gap-5 p-2">
                                <p className="">Category: {data.category}</p>
                                <p className="">Rating: {data.rating}</p>
                                <button className="btn btn-primary rounded-3xl">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReadBooksContent;
