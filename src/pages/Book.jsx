import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useBookData from "../Hook/useBookData";
import { saveToLocalStorage } from "../Utilities/localStored";


const Book = () => {
    const [singleData, setSingleData] = useState({});
    const { bookId } = useParams();
    const { data, loading } = useBookData();


    

    useEffect(() => {
        if (data) {
            const singleData = data.find(item => item.bookId == bookId);
            setSingleData(singleData);

        }
    }, [data, bookId]);

    const { image, bookName, author, category, rating, review, tags, totalPages, publisher, yearOfPublishing } = singleData || {};

    const handleRead =() =>{
        saveToLocalStorage(singleData);
        
    }

    return (
        <div className="mt-12 px-32">
            <section className="dark:bg-gray-100 ">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={image} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">{bookName}
                        </h1>
                        <p className="text-xl py-3">By : {author}</p>
                        <hr className="border-dashed" />
                        <h3 className="text-xl py-3">{category}</h3>
                        <hr className="border-dashed" />
                        <p className="mt-6 mb-8 text-lg  sm:mb-12 "> Review: <br /> <span className="text-sm">{review}</span>
                        </p>
                        <div>
                            <h3 className="text-xl font-bold">Tags:</h3>
                            {/* {
                                tags.map(tag =>(
                                    <a key={tag} className="px-3 py-1 rounded-sm hover:underline">
                                        #{tag}
                                    </a>
                                ))
                            } */}
                        </div>
                        <hr className="border-dashed py-3" />
                        <div className="flex gap-10">
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold">Number of Pages:</h4>
                                <h4 className="text-xs font-bold">publisher:</h4>
                                <h4 className="text-xs font-bold">Year Of Publishing:</h4>
                                <h4 className="text-xs font-bold">Rating: <span className="ml-10"></span> </h4>
                            </div>
                            <div className="space-y-3">
                                <h4 className="text-xs font-bold">{totalPages}</h4>
                                <h4 className="text-xs font-bold">{publisher}</h4>
                                <h4 className="text-xs font-bold">{yearOfPublishing}</h4>
                                <h4 className="text-xs font-bold">{rating} </h4>
                            </div>

                        </div>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
                            <Link to='/listedBooks' ><button onClick={handleRead} className="bg-green-500 p-3 rounded-lg">Read</button></Link>
                            <a rel="noopener noreferrer" href="#" ><button className="bg-green-500 p-3 rounded-lg">Wishlist</button></a>
                        </div>
                    </div>
                </div>
            </section>
            <h1>

            </h1>
        </div>
    );
};

export default Book;